import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-2stacov.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-2stacov"/>`,
		"fallback": "radix-icons:card-stack-minus",
	});
}

export default Component;
