import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss0igbcet.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss0igbcet"/>`,
		"fallback": "energy-icons:hail-48-bold",
	});
}

export default Component;
