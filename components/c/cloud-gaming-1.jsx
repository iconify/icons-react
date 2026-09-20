import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y63cbg1oe.css';
import '../../css/r/rm0jz_b6i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="y63cbg1oe"/><path class="rm0jz_b6i"/></g>`,
		"fallback": "streamline:cloud-gaming-1",
	});
}

export default Component;
