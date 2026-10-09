import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmuj25bzq.css';
import '../../css/l/llcw5u27i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmuj25bzq"/><path class="llcw5u27i"/>`,
		"fallback": "energy-icons:apartment-20-bold",
	});
}

export default Component;
