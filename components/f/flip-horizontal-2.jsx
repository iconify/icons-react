import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8hsgjgyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8hsgjgyk"/>`,
		"fallback": "lucide:flip-horizontal-2",
	});
}

export default Component;
