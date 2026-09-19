import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/doi63pb9p.css';
import '../../css/r/rf5qh1bng.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="doi63pb9p"/><path class="rf5qh1bng"/></g>`,
		"fallback": "glyphs:inbox-1",
	});
}

export default Component;
