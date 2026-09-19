import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dc8u2wqpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dc8u2wqpr"/>`,
		"fallback": "grommet-icons:document-pdf",
	});
}

export default Component;
