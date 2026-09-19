import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm7s0jbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm7s0jbso"/>`,
		"fallback": "cbi:echo-dot-gen-4-clock",
	});
}

export default Component;
