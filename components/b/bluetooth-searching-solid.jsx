import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd-3_xxsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd-3_xxsi"/>`,
		"fallback": "iconaut:bluetooth-searching-solid",
	});
}

export default Component;
