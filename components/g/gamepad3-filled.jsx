import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzab_8mca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uzab_8mca"/>`,
		"fallback": "reicon:gamepad3-filled",
	});
}

export default Component;
