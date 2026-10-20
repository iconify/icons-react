import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqusged2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqusged2w"/>`,
		"fallback": "vadivam:book-user",
	});
}

export default Component;
