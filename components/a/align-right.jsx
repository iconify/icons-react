import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi_uomb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi_uomb4f"/>`,
		"fallback": "pixelarticons:align-right",
	});
}

export default Component;
