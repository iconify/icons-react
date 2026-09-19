import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7qq7q29t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i7qq7q29t"/>`,
		"fallback": "glyphs:bells-outline",
	});
}

export default Component;
