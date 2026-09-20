import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/icv9eokje.css';
import '../../css/o/o21it0b4f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="icv9eokje"/><path class="o21it0b4f"/></g>`,
		"fallback": "streamline:graph-arrow-increase",
	});
}

export default Component;
