import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rosrm6b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rosrm6b3v"/>`,
		"fallback": "griddy-icons:email-open",
	});
}

export default Component;
