import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij6cj4rwy.css';
import '../../css/u/ubti_-buk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij6cj4rwy"/><path class="ubti_-buk"/>`,
		"fallback": "energy-icons:baby-48-bold",
	});
}

export default Component;
