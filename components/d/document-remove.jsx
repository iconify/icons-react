import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsep9da-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsep9da-h"/>`,
		"fallback": "mono-icons:document-remove",
	});
}

export default Component;
