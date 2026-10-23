import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yf2j8ceay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yf2j8ceay"/>`,
		"fallback": "vadivam:book-minus",
	});
}

export default Component;
