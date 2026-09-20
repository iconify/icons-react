import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3-nn-bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3-nn-bkx"/>`,
		"fallback": "pixelarticons:bulletlist-sharp",
	});
}

export default Component;
