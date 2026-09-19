import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzditrbqy.css';
import '../../css/b/bl1wln6eg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xzditrbqy"/><path class="bl1wln6eg"/>`,
		"fallback": "eva:camera-fill",
	});
}

export default Component;
