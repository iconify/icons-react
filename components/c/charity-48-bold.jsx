import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlmlrhbpp.css';
import '../../css/c/cyronpb3t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlmlrhbpp"/><path class="cyronpb3t"/>`,
		"fallback": "energy-icons:charity-48-bold",
	});
}

export default Component;
