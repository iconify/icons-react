import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qszn1yc9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qszn1yc9h"/>`,
		"fallback": "fontisto:icq",
	});
}

export default Component;
