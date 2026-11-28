import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkdo0pbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkdo0pbra"/>`,
		"fallback": "iconaut:image-check-solid",
	});
}

export default Component;
