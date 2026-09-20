import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da6q-edbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da6q-edbh"/>`,
		"fallback": "lucide:cloud-sun",
	});
}

export default Component;
