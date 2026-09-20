import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8fhi_b4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8fhi_b4p"/>`,
		"fallback": "pixelarticons:flip-horizontal-2",
	});
}

export default Component;
