import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t49ay6b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t49ay6b9z"/>`,
		"fallback": "reicon:arrow-down-right-filled",
	});
}

export default Component;
