import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9zy66b9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9zy66b9g"/>`,
		"fallback": "mynaui:dots-diamond",
	});
}

export default Component;
