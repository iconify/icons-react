import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm5v2qbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tm5v2qbdt"/>`,
		"fallback": "streamline-sharp:hand-held-tablet-drawing-solid",
	});
}

export default Component;
