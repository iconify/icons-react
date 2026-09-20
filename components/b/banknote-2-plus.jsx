import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibbw215yd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibbw215yd"/>`,
		"fallback": "keyline-icons:banknote-2-plus",
	});
}

export default Component;
