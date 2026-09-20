import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7987obuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7987obuu"/>`,
		"fallback": "tdesign:calculation",
	});
}

export default Component;
