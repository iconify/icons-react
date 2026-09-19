import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6x8okbaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a6x8okbaf"/>`,
		"fallback": "iconamoon:headphone-fill",
	});
}

export default Component;
