import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxk16vb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxk16vb5q"/>`,
		"fallback": "vadivam:arrow-up-to-line",
	});
}

export default Component;
