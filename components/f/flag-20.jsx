import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y69yz0bvp.css';
import '../../css/b/b9tupzbbc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y69yz0bvp"/><path class="b9tupzbbc"/>`,
		"fallback": "energy-icons:flag-20",
	});
}

export default Component;
