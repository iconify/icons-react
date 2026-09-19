import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cysgz9bwt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cysgz9bwt"/>`,
		"fallback": "glyphs-poly:hand-index",
	});
}

export default Component;
