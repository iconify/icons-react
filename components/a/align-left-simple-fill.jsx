import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqtmz3b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fqtmz3b1d"/>`,
		"fallback": "si:align-left-simple-fill",
	});
}

export default Component;
