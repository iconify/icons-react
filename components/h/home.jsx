import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6r7svz_j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6r7svz_j"/>`,
		"fallback": "zondicons:home",
	});
}

export default Component;
