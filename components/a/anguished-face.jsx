import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1849ip8l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1849ip8l"/>`,
		"fallback": "pinhead:anguished-face",
	});
}

export default Component;
