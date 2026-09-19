import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al-qozjuu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al-qozjuu"/>`,
		"fallback": "flat-color-icons:generic-sorting-asc",
	});
}

export default Component;
