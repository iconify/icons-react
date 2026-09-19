import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvpz3_mij.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bvpz3_mij"/>`,
		"fallback": "glyphs-poly:hand-call",
	});
}

export default Component;
