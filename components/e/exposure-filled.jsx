import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs-ujmdie.css';
import '../../css/f/fwixbousw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs-ujmdie"/><path class="fwixbousw"/>`,
		"fallback": "boxicons:exposure-filled",
	});
}

export default Component;
