import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xesbq9znz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xesbq9znz"/>`,
		"fallback": "token:floor",
	});
}

export default Component;
