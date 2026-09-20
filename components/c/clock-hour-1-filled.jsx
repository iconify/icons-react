import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpl6ieb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpl6ieb9t"/>`,
		"fallback": "tabler:clock-hour-1-filled",
	});
}

export default Component;
