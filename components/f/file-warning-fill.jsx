import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al9_oyb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al9_oyb8d"/>`,
		"fallback": "mingcute:file-warning-fill",
	});
}

export default Component;
