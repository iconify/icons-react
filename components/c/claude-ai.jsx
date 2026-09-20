import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q58c3bbto.css';

const viewBox = {"width":256,"height":257};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q58c3bbto"/>`,
		"fallback": "thesvg-color:claude-ai",
	});
}

export default Component;
