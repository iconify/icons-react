import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um-ib7b-d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um-ib7b-d"/>`,
		"fallback": "zondicons:cheveron-outline-left",
	});
}

export default Component;
