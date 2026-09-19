import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-bqyd3sw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-bqyd3sw"/>`,
		"fallback": "f7:gamecontroller-fill",
	});
}

export default Component;
