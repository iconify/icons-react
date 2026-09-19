import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw3l99b5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cw3l99b5l"/>`,
		"fallback": "griddy-icons:battery-vertical-low",
	});
}

export default Component;
