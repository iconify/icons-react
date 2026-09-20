import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvooqgs_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvooqgs_x"/>`,
		"fallback": "ri:flip-vertical-2-fill",
	});
}

export default Component;
