import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa9_y3b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa9_y3b5q"/>`,
		"fallback": "vadivam:groceries",
	});
}

export default Component;
