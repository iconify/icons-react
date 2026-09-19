import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_g9z3bbe.css';

const viewBox = {"width":833,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_g9z3bbe"/>`,
		"fallback": "whh:fontrounded",
	});
}

export default Component;
