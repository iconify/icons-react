import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnxdv-_-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnxdv-_-v"/>`,
		"fallback": "vadivam:align-vertical-justify-start",
	});
}

export default Component;
