import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x7ftiv9rj.css';
import '../../css/e/e2q8iacln.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x7ftiv9rj"/><path class="e2q8iacln"/></g>`,
		"fallback": "glyphs:car-wash",
	});
}

export default Component;
