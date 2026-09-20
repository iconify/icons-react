import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwznzsrok.css';
import '../../css/p/p8bzevp-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwznzsrok"/><path class="p8bzevp-b"/>`,
		"fallback": "pixel:cloud-download-alt",
	});
}

export default Component;
