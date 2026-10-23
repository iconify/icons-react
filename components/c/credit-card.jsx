import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oslpx-ver.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oslpx-ver"/>`,
		"fallback": "vadivam:credit-card",
	});
}

export default Component;
