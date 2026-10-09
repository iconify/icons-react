import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzjiqabtu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzjiqabtu"/>`,
		"fallback": "energy-icons:filter-20",
	});
}

export default Component;
