import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f85l1hqup.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f85l1hqup"/>`,
		"fallback": "lineicons:code",
	});
}

export default Component;
