import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xfzc1ffoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xfzc1ffoz"/>`,
		"fallback": "mynaui:clock-eight-solid",
	});
}

export default Component;
