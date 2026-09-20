import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ful3b6bej.css';
import '../../css/h/h5y8-bciz.css';
import '../../css/q/qqkcisb9s.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ful3b6bej"/><path class="h5y8-bciz"/><path class="qqkcisb9s"/>`,
		"fallback": "medical-icon:dermatology",
	});
}

export default Component;
