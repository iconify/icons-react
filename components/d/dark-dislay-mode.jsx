import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tj67jkkyf.css';
import '../../css/d/dln8ziysl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tj67jkkyf"/><path class="dln8ziysl"/></g>`,
		"fallback": "streamline-flex:dark-dislay-mode",
	});
}

export default Component;
