import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kivs9tpmy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kivs9tpmy"/>`,
		"fallback": "lsicon:double-arrow-down-filled",
	});
}

export default Component;
