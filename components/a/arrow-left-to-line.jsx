import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6uek35no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6uek35no"/>`,
		"fallback": "vadivam:arrow-left-to-line",
	});
}

export default Component;
