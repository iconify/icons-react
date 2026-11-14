import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo96n54an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo96n54an"/>`,
		"fallback": "hugeicons:dollar-01",
	});
}

export default Component;
