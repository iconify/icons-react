import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp8wsbcdl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp8wsbcdl"/>`,
		"fallback": "at-icons:arrow-uturn-up-left",
	});
}

export default Component;
