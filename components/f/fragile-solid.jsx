import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_z4_2wnd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_z4_2wnd"/>`,
		"fallback": "streamline:fragile-solid",
	});
}

export default Component;
