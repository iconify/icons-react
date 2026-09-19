import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x83zgdb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x83zgdb9b"/>`,
		"fallback": "iconoir:dollar",
	});
}

export default Component;
