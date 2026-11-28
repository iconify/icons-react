import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvj5spbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvj5spbyz"/>`,
		"fallback": "iconaut:ai-face-look-right-solid",
	});
}

export default Component;
