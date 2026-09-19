import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc78nobou.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc78nobou"/>`,
		"fallback": "codicon:copilot-snooze",
	});
}

export default Component;
