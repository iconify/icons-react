import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys95-wbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys95-wbci"/>`,
		"fallback": "iconaut:edit-off-solid",
	});
}

export default Component;
