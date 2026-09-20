import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxucp5bii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxucp5bii"/>`,
		"fallback": "vadivam:arrow-right-left",
	});
}

export default Component;
