import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2f2j9cea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r2f2j9cea"/>`,
		"fallback": "griddy-icons:email-open-alt-filled",
	});
}

export default Component;
