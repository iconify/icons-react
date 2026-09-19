import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl3ctjb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sl3ctjb3y"/>`,
		"fallback": "griddy-icons:bed-linen-filled",
	});
}

export default Component;
