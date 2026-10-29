import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm07_l1yl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sm07_l1yl"/>`,
		"fallback": "vadivam:arrow-down-a-z",
	});
}

export default Component;
