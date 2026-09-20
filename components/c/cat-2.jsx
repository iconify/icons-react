import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jhtled03j.css';
import '../../css/a/a_05w3ova.css';
import '../../css/q/qovw8ccxr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jhtled03j"/><path class="a_05w3ova"/><path class="qovw8ccxr"/></g>`,
		"fallback": "streamline-flex:cat-2",
	});
}

export default Component;
