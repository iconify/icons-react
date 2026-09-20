import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz4ck4-4i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz4ck4-4i"/>`,
		"fallback": "pinhead:flush-curb-with-question-mark",
	});
}

export default Component;
