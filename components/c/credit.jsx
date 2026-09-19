import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/l9pjosibo.css';
import '../../css/l/lg-df-5wa.css';
import '../../css/q/qkkkz55hz.css';
import '../../css/y/y08oegk6j.css';
import '../../css/n/n52yinngx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="l9pjosibo"/><path class="lg-df-5wa"/><path class="qkkkz55hz"/><path class="y08oegk6j"/><path class="n52yinngx"/></g>`,
		"fallback": "icon-park:credit",
	});
}

export default Component;
