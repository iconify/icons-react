import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwal6xeof.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwal6xeof"/>`,
		"fallback": "zondicons:cheveron-up",
	});
}

export default Component;
