import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvl9o-7-e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvl9o-7-e"/>`,
		"fallback": "fa7-solid:handcuffs",
	});
}

export default Component;
