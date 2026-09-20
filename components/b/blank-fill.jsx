import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgv2w6bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vgv2w6bio"/>`,
		"fallback": "lets-icons:blank-fill",
	});
}

export default Component;
