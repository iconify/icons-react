import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zchu_4bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zchu_4bpp"/>`,
		"fallback": "solar:arrow-right-outline",
	});
}

export default Component;
