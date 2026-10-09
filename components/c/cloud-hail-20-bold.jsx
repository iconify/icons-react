import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dve4gcewv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dve4gcewv"/>`,
		"fallback": "energy-icons:cloud-hail-20-bold",
	});
}

export default Component;
