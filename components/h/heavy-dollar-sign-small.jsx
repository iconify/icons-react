import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffr2t8xmz.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffr2t8xmz"/>`,
		"fallback": "dinkie-icons:heavy-dollar-sign-small",
	});
}

export default Component;
