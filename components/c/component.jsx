import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djb7u20ie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djb7u20ie"/>`,
		"fallback": "vadivam:component",
	});
}

export default Component;
