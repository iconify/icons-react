import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwvtv4vld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwvtv4vld"/>`,
		"fallback": "thesvg-color:indie-hackers",
	});
}

export default Component;
