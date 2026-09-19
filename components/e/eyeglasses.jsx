import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcu0wuc1n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcu0wuc1n"/>`,
		"fallback": "bi:eyeglasses",
	});
}

export default Component;
