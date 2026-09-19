import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl1-n-b-w.css';
import '../../css/k/k5vk-bbnq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl1-n-b-w"/><path class="k5vk-bbnq"/>`,
		"fallback": "carbon:currency",
	});
}

export default Component;
