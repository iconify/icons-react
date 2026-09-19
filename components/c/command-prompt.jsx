import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixexqn-8v.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixexqn-8v"/>`,
		"fallback": "fluent-mdl2:command-prompt",
	});
}

export default Component;
