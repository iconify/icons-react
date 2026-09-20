import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxcwr8xud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxcwr8xud"/>`,
		"fallback": "mdi:arrow-top-right-bold-box",
	});
}

export default Component;
