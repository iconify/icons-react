import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1wmj44cx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1wmj44cx"/>`,
		"fallback": "iconaut:circle-half-striped-solid",
	});
}

export default Component;
