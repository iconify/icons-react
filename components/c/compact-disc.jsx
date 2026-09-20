import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-9-2ob4w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-9-2ob4w"/>`,
		"fallback": "ix:compact-disc",
	});
}

export default Component;
