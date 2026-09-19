import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i8b4nsbyr.css';
import '../../css/d/d38ng7d1v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i8b4nsbyr"/><path class="d38ng7d1v"/></g>`,
		"fallback": "glyphs:bell",
	});
}

export default Component;
