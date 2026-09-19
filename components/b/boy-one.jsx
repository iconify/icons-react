import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/b/bshyy_b6k.css';
import '../../css/o/otz1-ez0v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><circle class="bshyy_b6k"/><path class="otz1-ez0v"/></g>`,
		"fallback": "icon-park:boy-one",
	});
}

export default Component;
