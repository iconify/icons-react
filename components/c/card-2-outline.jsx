import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l96-r8sfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l96-r8sfd"/>`,
		"fallback": "solar:card-2-outline",
	});
}

export default Component;
