import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixcl-v7ys.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixcl-v7ys"/>`,
		"fallback": "energy-icons:frequency-20-bold",
	});
}

export default Component;
