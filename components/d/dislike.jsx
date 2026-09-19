import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c054m9cuf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c054m9cuf"/>`,
		"fallback": "icon-park-outline:dislike",
	});
}

export default Component;
