import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsi3rkp0j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsi3rkp0j"/>`,
		"fallback": "energy-icons:cursor-click-20-bold",
	});
}

export default Component;
