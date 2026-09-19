import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssmn0jj2v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ssmn0jj2v"/>`,
		"fallback": "glyphs:bookmark-outline",
	});
}

export default Component;
