import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1n5p1ycg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u1n5p1ycg"/>`,
		"fallback": "sidekickicons:bars-3-bottom-center-16-solid",
	});
}

export default Component;
