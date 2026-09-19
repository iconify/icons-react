import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz_1fupeh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz_1fupeh"/>`,
		"fallback": "glyphs:comment-3",
	});
}

export default Component;
