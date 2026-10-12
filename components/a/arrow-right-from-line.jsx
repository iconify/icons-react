import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5tb85boy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5tb85boy"/>`,
		"fallback": "andrsrxn:arrow-right-from-line",
	});
}

export default Component;
