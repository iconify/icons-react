import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4hy-p3tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4hy-p3tk"/>`,
		"fallback": "thesvg-color:huawei",
	});
}

export default Component;
