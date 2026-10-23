import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7a1p6bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7a1p6bmp"/>`,
		"fallback": "vadivam:croissant",
	});
}

export default Component;
