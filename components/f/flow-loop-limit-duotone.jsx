import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6-ylwfiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary z6-ylwfiv"/>`,
		"fallback": "iconaut:flow-loop-limit-duotone",
	});
}

export default Component;
