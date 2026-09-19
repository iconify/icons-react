import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/ktmahbbai.css';
import '../../css/v/v17rdmbjn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ktmahbbai"/><path class="v17rdmbjn"/></g>`,
		"fallback": "glyphs:bookmarks",
	});
}

export default Component;
