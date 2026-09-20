import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tckw8clyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tckw8clyy"/>`,
		"fallback": "tdesign:dashboard-1-filled",
	});
}

export default Component;
