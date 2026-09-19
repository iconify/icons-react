import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpoyczb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zpoyczb0d"/>`,
		"fallback": "griddy-icons:fire-truck-filled",
	});
}

export default Component;
