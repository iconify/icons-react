import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i23ml48ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i23ml48ll"/>`,
		"fallback": "thesvg-color:dailymotion",
	});
}

export default Component;
