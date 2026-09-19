import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6c7ln5ao.css';

const viewBox = {"width":560,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6c7ln5ao"/>`,
		"fallback": "il:file",
	});
}

export default Component;
