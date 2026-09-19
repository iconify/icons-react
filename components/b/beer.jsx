import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jesw7_b6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jesw7_b6n"/>`,
		"fallback": "ion:beer",
	});
}

export default Component;
