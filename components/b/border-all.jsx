import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3gyce2qr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3gyce2qr"/>`,
		"fallback": "glyphs:border-all",
	});
}

export default Component;
