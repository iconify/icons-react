import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/n/nsqnp5fhf.css';
import '../../css/d/d__e8ittb.css';
import '../../css/d/daph9-bsy.css';
import '../../css/a/ar9eotbwa.css';
import '../../css/o/o2ois6brh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><rect class="nsqnp5fhf"/><circle class="d__e8ittb"/><path class="daph9-bsy"/><path class="ar9eotbwa"/><path class="o2ois6brh"/></g>`,
		"fallback": "icon-park:control",
	});
}

export default Component;
