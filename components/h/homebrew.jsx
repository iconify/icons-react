import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-s6019nc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-s6019nc"/>`,
		"fallback": "simple-icons:homebrew",
	});
}

export default Component;
