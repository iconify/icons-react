import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/l/lbti0vbpg.css';
import '../../css/k/kx3lczbpu.css';
import '../../css/n/n8c6bo9hy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path clip-rule="evenodd" class="lbti0vbpg"/><path class="kx3lczbpu"/><path class="n8c6bo9hy"/></g>`,
		"fallback": "glyphs:globe-middle-duo",
	});
}

export default Component;
