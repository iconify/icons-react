import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxy0ol00o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxy0ol00o"/>`,
		"fallback": "boxicons:home-circle-filled",
	});
}

export default Component;
