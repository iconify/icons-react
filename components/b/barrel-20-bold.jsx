import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ario1abrj.css';
import '../../css/f/fi8t2tb3o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ario1abrj"/><path class="fi8t2tb3o"/>`,
		"fallback": "energy-icons:barrel-20-bold",
	});
}

export default Component;
