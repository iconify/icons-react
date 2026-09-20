import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc6a_rusm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc6a_rusm"/>`,
		"fallback": "pinhead:dot-with-rays-up",
	});
}

export default Component;
