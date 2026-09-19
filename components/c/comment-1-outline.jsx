import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5zgcqb2e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s5zgcqb2e"/>`,
		"fallback": "glyphs:comment-1-outline",
	});
}

export default Component;
