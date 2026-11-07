import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj6io99fw.css';
import '../../css/x/xrub8bc1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tj6io99fw"/><path class="xrub8bc1s"/>`,
		"fallback": "solar:gps-bold",
	});
}

export default Component;
