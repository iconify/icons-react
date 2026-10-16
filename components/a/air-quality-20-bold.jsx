import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srmecmdfr.css';
import '../../css/d/d7nxq5b8a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srmecmdfr"/><path class="d7nxq5b8a"/>`,
		"fallback": "energy-icons:air-quality-20-bold",
	});
}

export default Component;
