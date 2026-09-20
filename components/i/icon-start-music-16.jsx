import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anq_8t-3h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anq_8t-3h"/>`,
		"fallback": "qlementine-icons:icon-start-music-16",
	});
}

export default Component;
