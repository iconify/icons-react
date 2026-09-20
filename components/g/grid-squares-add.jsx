import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpmoyebsx.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpmoyebsx"/>`,
		"fallback": "system-uicons:grid-squares-add",
	});
}

export default Component;
