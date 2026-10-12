import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf1d1ooga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf1d1ooga"/>`,
		"fallback": "lucide-extended:align-vertical-justify-center-filled",
	});
}

export default Component;
