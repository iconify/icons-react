import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-pfo7vby.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-pfo7vby"/>`,
		"fallback": "lineicons:helicopter",
	});
}

export default Component;
