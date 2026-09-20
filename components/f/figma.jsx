import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buvu_wc0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buvu_wc0t"/>`,
		"fallback": "pixelarticons:figma",
	});
}

export default Component;
