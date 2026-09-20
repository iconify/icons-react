import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njigqu7ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njigqu7ua"/>`,
		"fallback": "vadivam:ampersand",
	});
}

export default Component;
