import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdv1--bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdv1--bmr"/>`,
		"fallback": "pixelarticons:align-end-horizontal",
	});
}

export default Component;
