import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgxgzno3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgxgzno3m"/>`,
		"fallback": "mynaui:battery-x",
	});
}

export default Component;
