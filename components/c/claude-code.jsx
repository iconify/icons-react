import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-dnt8gvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-dnt8gvo"/>`,
		"fallback": "meteor-icons:claude-code",
	});
}

export default Component;
