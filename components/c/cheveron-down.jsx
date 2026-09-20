import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khu0vob1r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khu0vob1r"/>`,
		"fallback": "zondicons:cheveron-down",
	});
}

export default Component;
