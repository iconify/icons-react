import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1jzv7brt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c1jzv7brt"/>`,
		"fallback": "glyphs:folder-open-outline",
	});
}

export default Component;
