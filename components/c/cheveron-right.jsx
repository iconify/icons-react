import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe1zfhxdg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe1zfhxdg"/>`,
		"fallback": "zondicons:cheveron-right",
	});
}

export default Component;
