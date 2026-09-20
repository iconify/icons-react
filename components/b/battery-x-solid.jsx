import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt9ie6bek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt9ie6bek"/>`,
		"fallback": "mynaui:battery-x-solid",
	});
}

export default Component;
