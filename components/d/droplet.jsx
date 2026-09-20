import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnb8e7iba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnb8e7iba"/>`,
		"fallback": "tabler:droplet",
	});
}

export default Component;
