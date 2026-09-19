import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw2escf0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mw2escf0r"/>`,
		"fallback": "iconamoon:check-square-fill",
	});
}

export default Component;
