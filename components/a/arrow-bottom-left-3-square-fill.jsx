import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lngy86plg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lngy86plg"/>`,
		"fallback": "iconamoon:arrow-bottom-left-3-square-fill",
	});
}

export default Component;
