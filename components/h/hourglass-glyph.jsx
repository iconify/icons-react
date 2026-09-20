import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atmwxtv7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atmwxtv7i"/>`,
		"fallback": "pixelarticons:hourglass-glyph",
	});
}

export default Component;
