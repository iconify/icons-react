import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_01joir.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz_01joir"/>`,
		"fallback": "energy-icons:divide-20-bold",
	});
}

export default Component;
