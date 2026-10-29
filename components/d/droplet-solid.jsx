import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymhvrff1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k ymhvrff1o"/>`,
		"fallback": "withicons:droplet-solid",
	});
}

export default Component;
