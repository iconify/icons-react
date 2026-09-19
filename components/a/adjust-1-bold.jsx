import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxo10u8ki.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xxo10u8ki"/>`,
		"fallback": "glyphs:adjust-1-bold",
	});
}

export default Component;
