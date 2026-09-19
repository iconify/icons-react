import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkvbcfvyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkvbcfvyf"/>`,
		"fallback": "cbi:friends-of-hue-flat-p-alt",
	});
}

export default Component;
