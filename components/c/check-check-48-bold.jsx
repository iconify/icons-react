import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khuzr9qny.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khuzr9qny"/>`,
		"fallback": "energy-icons:check-check-48-bold",
	});
}

export default Component;
