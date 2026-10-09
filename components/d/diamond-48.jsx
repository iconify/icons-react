import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9v47kbel.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9v47kbel"/>`,
		"fallback": "energy-icons:diamond-48",
	});
}

export default Component;
