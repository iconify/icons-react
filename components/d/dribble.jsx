import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dln8ziysl.css';
import '../../css/y/y0i_qvbwj.css';
import '../../css/e/ebls0tbft.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="dln8ziysl"/><path class="y0i_qvbwj"/><path class="ebls0tbft"/></g>`,
		"fallback": "streamline-flex:dribble",
	});
}

export default Component;
