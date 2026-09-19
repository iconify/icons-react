import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfkcbob-y.css';

const viewBox = {"width":733,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfkcbob-y"/>`,
		"fallback": "whh:candycane",
	});
}

export default Component;
