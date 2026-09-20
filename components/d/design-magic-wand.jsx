import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm1my-bgj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm1my-bgj"/>`,
		"fallback": "streamline-pixel:design-magic-wand",
	});
}

export default Component;
