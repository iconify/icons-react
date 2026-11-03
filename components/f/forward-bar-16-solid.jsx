import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5r0r42lp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p5r0r42lp"/>`,
		"fallback": "sidekickicons:forward-bar-16-solid",
	});
}

export default Component;
