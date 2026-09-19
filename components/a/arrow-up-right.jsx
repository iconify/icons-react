import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhq9u8zqr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhq9u8zqr"/>`,
		"fallback": "gravity-ui:arrow-up-right",
	});
}

export default Component;
