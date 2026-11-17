import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsh7isb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsh7isb9v"/>`,
		"fallback": "cbi:desklamp",
	});
}

export default Component;
