import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by6j3h99l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by6j3h99l"/>`,
		"fallback": "pinhead:bird-and-question-mark",
	});
}

export default Component;
