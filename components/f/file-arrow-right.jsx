import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbeftnb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbeftnb4a"/>`,
		"fallback": "keyline-icons:file-arrow-right",
	});
}

export default Component;
