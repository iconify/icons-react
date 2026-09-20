import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp4btfsof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp4btfsof"/>`,
		"fallback": "mdi:format-letter-spacing-variant",
	});
}

export default Component;
