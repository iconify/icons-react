import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvwdo60w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwvwdo60w"/>`,
		"fallback": "bi:egg",
	});
}

export default Component;
