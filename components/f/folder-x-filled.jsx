import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g03z_wayl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g03z_wayl"/>`,
		"fallback": "boxicons:folder-x-filled",
	});
}

export default Component;
