import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adxq25bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adxq25bpp"/>`,
		"fallback": "iconaut:badge-check-solid",
	});
}

export default Component;
