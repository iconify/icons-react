import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meuh_2vbb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meuh_2vbb"/>`,
		"fallback": "la:arrow-left-solid",
	});
}

export default Component;
