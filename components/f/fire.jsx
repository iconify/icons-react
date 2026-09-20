import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bztwfrbon.css';
import '../../css/p/pb328ubdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bztwfrbon"/><path class="pb328ubdi"/>`,
		"fallback": "lets-icons:fire",
	});
}

export default Component;
