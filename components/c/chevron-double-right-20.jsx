import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amszec7ov.css';
import '../../css/r/roxo8uutm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amszec7ov"/><path class="roxo8uutm"/>`,
		"fallback": "garden:chevron-double-right-20",
	});
}

export default Component;
