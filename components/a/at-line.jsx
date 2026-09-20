import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fc3i_-79p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fc3i_-79p"/>`,
		"fallback": "ri:at-line",
	});
}

export default Component;
