import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fde5jabaf.css';
import '../../css/k/k4nhvymim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fde5jabaf"/><path class="k4nhvymim"/>`,
		"fallback": "streamline-ultimate:accounting-coins-bold",
	});
}

export default Component;
