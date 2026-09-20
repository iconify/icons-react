import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrhp4jdbp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrhp4jdbp"/>`,
		"fallback": "la:grin-stars-solid",
	});
}

export default Component;
