import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdyj9pbdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdyj9pbdq"/>`,
		"fallback": "proicons:gift",
	});
}

export default Component;
