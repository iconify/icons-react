import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eop4rkg4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eop4rkg4h"/>`,
		"fallback": "iconaut:hexagon-full-solid",
	});
}

export default Component;
