import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7g0q9y_w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y7g0q9y_w"/>`,
		"fallback": "ix:export-failed",
	});
}

export default Component;
