import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfdad1bbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfdad1bbe"/>`,
		"fallback": "lucide:arrow-big-right",
	});
}

export default Component;
