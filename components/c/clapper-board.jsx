import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihhe6fw-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihhe6fw-f"/>`,
		"fallback": "uil:clapper-board",
	});
}

export default Component;
