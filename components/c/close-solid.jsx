import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxk9lbbab.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxk9lbbab"/>`,
		"fallback": "zondicons:close-solid",
	});
}

export default Component;
