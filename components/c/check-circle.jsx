import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytv8j6l6t.css';
import '../../css/q/q5418bbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytv8j6l6t"/><path class="q5418bbsm"/>`,
		"fallback": "stash:check-circle",
	});
}

export default Component;
