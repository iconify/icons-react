import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8x21sc6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8x21sc6j"/>`,
		"fallback": "tdesign:format-horizontal-align-bottom",
	});
}

export default Component;
