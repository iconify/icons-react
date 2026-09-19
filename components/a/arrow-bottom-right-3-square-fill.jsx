import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfg4uvbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gfg4uvbut"/>`,
		"fallback": "iconamoon:arrow-bottom-right-3-square-fill",
	});
}

export default Component;
