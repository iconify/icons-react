import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwvmuh2tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwvmuh2tk"/>`,
		"fallback": "withicons:check-circle-solid",
	});
}

export default Component;
