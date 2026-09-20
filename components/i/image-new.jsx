import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vamt_-b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vamt_-b0a"/>`,
		"fallback": "pixelarticons:image-new",
	});
}

export default Component;
