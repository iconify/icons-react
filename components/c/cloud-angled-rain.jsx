import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rugsg9zlm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rugsg9zlm"/>`,
		"fallback": "hugeicons:cloud-angled-rain",
	});
}

export default Component;
