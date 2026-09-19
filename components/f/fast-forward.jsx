import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raz481oyr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raz481oyr"/>`,
		"fallback": "at-icons:fast-forward",
	});
}

export default Component;
