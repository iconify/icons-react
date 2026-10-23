import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq4t0w1th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq4t0w1th"/>`,
		"fallback": "vadivam:drone",
	});
}

export default Component;
