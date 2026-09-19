import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbocnv20s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbocnv20s"/>`,
		"fallback": "boxicons:col-resize",
	});
}

export default Component;
