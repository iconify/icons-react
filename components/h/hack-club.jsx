import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhke2_bbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhke2_bbl"/>`,
		"fallback": "thesvg-color:hack-club",
	});
}

export default Component;
