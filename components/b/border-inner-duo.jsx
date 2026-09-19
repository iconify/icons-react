import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qqzdzubrk.css';
import '../../css/w/wy3zobcxc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qqzdzubrk"/><path class="wy3zobcxc"/></g>`,
		"fallback": "glyphs:border-inner-duo",
	});
}

export default Component;
