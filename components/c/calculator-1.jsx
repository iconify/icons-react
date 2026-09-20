import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o9k4bmbcy.css';
import '../../css/b/b194ltn6p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o9k4bmbcy"/><path class="b194ltn6p"/></g>`,
		"fallback": "streamline:calculator-1",
	});
}

export default Component;
