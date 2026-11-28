import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaztl-eah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaztl-eah"/>`,
		"fallback": "noviair-light:archive-lock",
	});
}

export default Component;
