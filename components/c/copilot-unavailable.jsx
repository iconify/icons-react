import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo8q-3hhk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo8q-3hhk"/>`,
		"fallback": "codicon:copilot-unavailable",
	});
}

export default Component;
