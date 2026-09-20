import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oud75tbup.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oud75tbup"/>`,
		"fallback": "lsicon:infuse-one-outline",
	});
}

export default Component;
