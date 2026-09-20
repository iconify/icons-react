import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrnyv_a6y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrnyv_a6y"/>`,
		"fallback": "pinhead:gallbladder",
	});
}

export default Component;
