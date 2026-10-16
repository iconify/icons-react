import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4w681bdr.css';
import '../../css/j/j-f5_l35o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4w681bdr"/><path class="j-f5_l35o"/>`,
		"fallback": "energy-icons:antenna-48-bold",
	});
}

export default Component;
