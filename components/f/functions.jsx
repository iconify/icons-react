import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccq24fzrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccq24fzrc"/>`,
		"fallback": "ri:functions",
	});
}

export default Component;
