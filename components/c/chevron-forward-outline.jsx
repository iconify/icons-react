import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg_6pjuzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rg_6pjuzv"/>`,
		"fallback": "famicons:chevron-forward-outline",
	});
}

export default Component;
