import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk_as72bq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk_as72bq"/>`,
		"fallback": "la:cloud-sun-rain",
	});
}

export default Component;
