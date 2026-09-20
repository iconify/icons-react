import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkbx_wbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkbx_wbhv"/>`,
		"fallback": "pixelarticons:align-center-vertical",
	});
}

export default Component;
