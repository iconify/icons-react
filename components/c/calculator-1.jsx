import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o07-fmbia.css';
import '../../css/d/dj359ydno.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o07-fmbia"/><path class="dj359ydno"/></g>`,
		"fallback": "streamline-flex:calculator-1",
	});
}

export default Component;
