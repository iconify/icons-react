import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9vvp0i8g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9vvp0i8g"/>`,
		"fallback": "bi:emoji-grimace-fill",
	});
}

export default Component;
