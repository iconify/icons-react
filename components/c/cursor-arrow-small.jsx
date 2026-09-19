import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jilqz431u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jilqz431u"/>`,
		"fallback": "dinkie-icons:cursor-arrow-small",
	});
}

export default Component;
