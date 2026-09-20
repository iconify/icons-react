import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx_0ltekc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bx_0ltekc"/>`,
		"fallback": "mingcute:folder-upload-fill",
	});
}

export default Component;
