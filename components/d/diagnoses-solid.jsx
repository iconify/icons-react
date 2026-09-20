import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb4eypbmm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb4eypbmm"/>`,
		"fallback": "la:diagnoses-solid",
	});
}

export default Component;
