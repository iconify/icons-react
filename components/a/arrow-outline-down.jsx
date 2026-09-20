import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3lc7c9vm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3lc7c9vm"/>`,
		"fallback": "zondicons:arrow-outline-down",
	});
}

export default Component;
