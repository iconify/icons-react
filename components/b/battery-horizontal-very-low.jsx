import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc37nr-lx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xc37nr-lx"/>`,
		"fallback": "griddy-icons:battery-horizontal-very-low",
	});
}

export default Component;
