import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zueh1cegf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zueh1cegf"/>`,
		"fallback": "streamline-ultimate:fitbit-logo",
	});
}

export default Component;
