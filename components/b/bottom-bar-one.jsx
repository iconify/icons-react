import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5ig9cc7s.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5ig9cc7s"/>`,
		"fallback": "icon-park-outline:bottom-bar-one",
	});
}

export default Component;
