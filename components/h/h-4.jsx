import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fouad-q2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fouad-q2e"/>`,
		"fallback": "tabler:h-4",
	});
}

export default Component;
