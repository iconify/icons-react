import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1r5kjbrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1r5kjbrz"/>`,
		"fallback": "sidekickicons:bars-3-bottom-center",
	});
}

export default Component;
