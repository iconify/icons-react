import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7fn5abah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7fn5abah"/>`,
		"fallback": "energy-icons:chevron-down-48-bold",
	});
}

export default Component;
