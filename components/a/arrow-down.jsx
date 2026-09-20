import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km0j_jb9j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km0j_jb9j"/>`,
		"fallback": "zondicons:arrow-down",
	});
}

export default Component;
