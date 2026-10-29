import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8gq40bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8gq40bvd"/>`,
		"fallback": "vadivam:arrow-down-1-0",
	});
}

export default Component;
