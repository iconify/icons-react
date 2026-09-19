import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6gpl0b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n6gpl0b0a"/>`,
		"fallback": "iconamoon:arrow-top-left-5-circle-fill",
	});
}

export default Component;
