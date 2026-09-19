import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd9w0yveu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pd9w0yveu"/>`,
		"fallback": "basil:bullhorn-outline",
	});
}

export default Component;
