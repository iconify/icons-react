import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os_96zjpc.css';
import '../../css/u/ujd91437t.css';
import '../../css/d/d6h3j5b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="os_96zjpc"/><path class="ujd91437t"/><path class="d6h3j5b5e"/>`,
		"fallback": "solar:cart-large-minimalistic-bold",
	});
}

export default Component;
