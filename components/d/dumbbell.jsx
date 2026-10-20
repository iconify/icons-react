import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avf78bcuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avf78bcuz"/>`,
		"fallback": "vadivam:dumbbell",
	});
}

export default Component;
