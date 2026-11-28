import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqtv_8b1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary rqtv_8b1l"/>`,
		"fallback": "iconaut:braille-duotone",
	});
}

export default Component;
