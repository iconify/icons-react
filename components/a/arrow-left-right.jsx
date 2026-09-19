import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to2z3sr5n.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to2z3sr5n"/>`,
		"fallback": "f7:arrow-left-right",
	});
}

export default Component;
