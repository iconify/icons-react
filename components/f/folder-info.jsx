import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gorbs6bmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gorbs6bmc"/>`,
		"fallback": "uil:folder-info",
	});
}

export default Component;
