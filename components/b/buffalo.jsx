import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fm-3jmkwj.css';

const viewBox = {"width":3035,"height":634};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fm-3jmkwj"/>`,
		"fallback": "ls:buffalo",
	});
}

export default Component;
