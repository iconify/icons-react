import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjtxg3s9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fjtxg3s9g"/>`,
		"fallback": "griddy-icons:battery-horizontal-full",
	});
}

export default Component;
