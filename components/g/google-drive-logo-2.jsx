import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amf6pcb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amf6pcb0t"/>`,
		"fallback": "streamline-logos:google-drive-logo-2",
	});
}

export default Component;
