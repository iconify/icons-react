import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avjij6g_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avjij6g_k"/>`,
		"fallback": "ci:file-image",
	});
}

export default Component;
