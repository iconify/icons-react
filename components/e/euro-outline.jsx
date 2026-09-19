import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fa322bcas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fa322bcas"/>`,
		"fallback": "healthicons:euro-outline",
	});
}

export default Component;
