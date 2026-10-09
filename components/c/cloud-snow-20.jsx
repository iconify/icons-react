import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af023dsnn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af023dsnn"/>`,
		"fallback": "energy-icons:cloud-snow-20",
	});
}

export default Component;
