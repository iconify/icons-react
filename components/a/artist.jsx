import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs1keu_xn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs1keu_xn"/>`,
		"fallback": "zondicons:artist",
	});
}

export default Component;
