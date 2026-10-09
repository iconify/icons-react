import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coivkzecr.css';
import '../../css/b/batf86bsb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coivkzecr"/><path class="batf86bsb"/>`,
		"fallback": "energy-icons:house-20-bold",
	});
}

export default Component;
