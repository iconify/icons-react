import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-h0x8l3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-h0x8l3b"/>`,
		"fallback": "tdesign:article-filled",
	});
}

export default Component;
