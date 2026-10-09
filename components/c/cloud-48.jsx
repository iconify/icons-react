import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf8qgfbqp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf8qgfbqp"/>`,
		"fallback": "energy-icons:cloud-48",
	});
}

export default Component;
