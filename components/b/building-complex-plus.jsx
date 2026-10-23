import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ns-0mfl4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ns-0mfl4q"/>`,
		"fallback": "vadivam:building-complex-plus",
	});
}

export default Component;
