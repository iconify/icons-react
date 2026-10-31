import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llzilzr9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llzilzr9b"/>`,
		"fallback": "coolicons:house-fill-round",
	});
}

export default Component;
