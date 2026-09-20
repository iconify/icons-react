import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgq8trccr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgq8trccr"/>`,
		"fallback": "vadivam:badge-percent",
	});
}

export default Component;
