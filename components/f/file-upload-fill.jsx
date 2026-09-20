import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/indfb2voo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="indfb2voo"/>`,
		"fallback": "mingcute:file-upload-fill",
	});
}

export default Component;
