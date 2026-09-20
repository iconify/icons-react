import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y71pgf84f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y71pgf84f"/>`,
		"fallback": "streamline-ultimate:award-trophy-1-bold",
	});
}

export default Component;
