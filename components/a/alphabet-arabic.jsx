import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io_dcmbez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io_dcmbez"/>`,
		"fallback": "hugeicons:alphabet-arabic",
	});
}

export default Component;
