import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bk0b5pbgk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bk0b5pbgk"/>`,
		"fallback": "zondicons:heart",
	});
}

export default Component;
