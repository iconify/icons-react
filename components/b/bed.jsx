import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwlh1-3tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwlh1-3tk"/>`,
		"fallback": "boxicons:bed",
	});
}

export default Component;
