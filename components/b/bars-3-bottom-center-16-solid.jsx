import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_4k9-uiz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_4k9-uiz"/>`,
		"fallback": "sidekickicons:bars-3-bottom-center-16-solid",
	});
}

export default Component;
