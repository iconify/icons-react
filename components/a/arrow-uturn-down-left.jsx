import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_qr2kb6i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_qr2kb6i"/>`,
		"fallback": "at-icons:arrow-uturn-down-left",
	});
}

export default Component;
