import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp0qxs3rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sp0qxs3rm"/>`,
		"fallback": "si:add-square-fill",
	});
}

export default Component;
