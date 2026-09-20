import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwe-d0bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwe-d0bpm"/>`,
		"fallback": "vadivam:balloon",
	});
}

export default Component;
