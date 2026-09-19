import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv4h2bcjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv4h2bcjt"/>`,
		"fallback": "boxicons:file-code-filled",
	});
}

export default Component;
