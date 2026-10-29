import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gszfr8bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gszfr8bjl"/>`,
		"fallback": "withicons:chevron-last-solid",
	});
}

export default Component;
