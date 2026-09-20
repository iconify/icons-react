import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1ku5-4fv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1ku5-4fv"/>`,
		"fallback": "ix:hard-reset",
	});
}

export default Component;
