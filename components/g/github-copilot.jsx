import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/larxflb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="larxflb5e"/>`,
		"fallback": "meteor-icons:github-copilot",
	});
}

export default Component;
