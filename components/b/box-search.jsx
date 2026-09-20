import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi5q_jiej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi5q_jiej"/>`,
		"fallback": "mdi:box-search",
	});
}

export default Component;
