import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfxxddc6p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfxxddc6p"/>`,
		"fallback": "fa-solid:cloud-rain",
	});
}

export default Component;
