import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py_7xmyxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py_7xmyxn"/>`,
		"fallback": "keyline-icons:corner-right-down-sharp-fill",
	});
}

export default Component;
