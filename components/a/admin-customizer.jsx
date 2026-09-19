import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbfpi108t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbfpi108t"/>`,
		"fallback": "dashicons:admin-customizer",
	});
}

export default Component;
