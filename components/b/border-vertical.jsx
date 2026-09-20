import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-wx6dlth.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-wx6dlth"/>`,
		"fallback": "zondicons:border-vertical",
	});
}

export default Component;
