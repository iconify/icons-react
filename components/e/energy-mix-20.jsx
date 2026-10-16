import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh2hmebrd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh2hmebrd"/>`,
		"fallback": "energy-icons:energy-mix-20",
	});
}

export default Component;
