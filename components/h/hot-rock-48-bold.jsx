import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igky23bwz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igky23bwz"/>`,
		"fallback": "energy-icons:hot-rock-48-bold",
	});
}

export default Component;
