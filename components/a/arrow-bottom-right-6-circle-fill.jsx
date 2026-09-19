import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wacjiqbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wacjiqbkw"/>`,
		"fallback": "iconamoon:arrow-bottom-right-6-circle-fill",
	});
}

export default Component;
