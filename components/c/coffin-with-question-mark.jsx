import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf_ta3b0v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf_ta3b0v"/>`,
		"fallback": "pinhead:coffin-with-question-mark",
	});
}

export default Component;
