import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijw27cjpz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijw27cjpz"/>`,
		"fallback": "streamline-color:arrow-shrink",
	});
}

export default Component;
