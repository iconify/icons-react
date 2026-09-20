import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhf0-4f-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhf0-4f-o"/>`,
		"fallback": "thesvg-color:andela",
	});
}

export default Component;
