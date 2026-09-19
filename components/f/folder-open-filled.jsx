import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmb_z30dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rmb_z30dz"/>`,
		"fallback": "griddy-icons:folder-open-filled",
	});
}

export default Component;
