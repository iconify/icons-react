import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysu_7yk8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysu_7yk8l"/>`,
		"fallback": "ci:arrow-undo-up-left",
	});
}

export default Component;
