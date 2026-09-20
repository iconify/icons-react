import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh0s2-9xd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh0s2-9xd"/>`,
		"fallback": "zondicons:close",
	});
}

export default Component;
