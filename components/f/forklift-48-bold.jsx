import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctpcvf1md.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctpcvf1md"/>`,
		"fallback": "energy-icons:forklift-48-bold",
	});
}

export default Component;
