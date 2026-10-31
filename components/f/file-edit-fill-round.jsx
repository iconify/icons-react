import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_56a7nxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_56a7nxe"/>`,
		"fallback": "coolicons:file-edit-fill-round",
	});
}

export default Component;
