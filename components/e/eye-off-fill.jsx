import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cut31abpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cut31abpn"/>`,
		"fallback": "iconamoon:eye-off-fill",
	});
}

export default Component;
