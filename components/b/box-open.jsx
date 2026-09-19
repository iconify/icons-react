import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c5fh8jbhm.css';
import '../../css/d/d1u7fbcdg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="c5fh8jbhm"/><path class="d1u7fbcdg"/></g>`,
		"fallback": "glyphs:box-open",
	});
}

export default Component;
