import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndzc9_vnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ndzc9_vnr"/>`,
		"fallback": "mingcute:exclude-fill",
	});
}

export default Component;
