import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysfr6k0aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysfr6k0aq"/>`,
		"fallback": "codex:brackets",
	});
}

export default Component;
