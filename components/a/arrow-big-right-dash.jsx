import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhptluobe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhptluobe"/>`,
		"fallback": "vadivam:arrow-big-right-dash",
	});
}

export default Component;
