import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-c3gjb4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-c3gjb4z"/>`,
		"fallback": "vadivam:arrow-big-up",
	});
}

export default Component;
