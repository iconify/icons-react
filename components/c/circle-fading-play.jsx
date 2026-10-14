import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca3hu0bci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca3hu0bci"/>`,
		"fallback": "lucide:circle-fading-play",
	});
}

export default Component;
