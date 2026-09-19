import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk25przvd.css';

const viewBox = {"width":1024,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk25przvd"/>`,
		"fallback": "fa:angle-up",
	});
}

export default Component;
