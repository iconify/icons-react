import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqq99_76y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqq99_76y"/>`,
		"fallback": "iconaut:hourglass-solid",
	});
}

export default Component;
