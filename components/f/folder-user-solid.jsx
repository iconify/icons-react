import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4s7d7bjc.css';
import '../../css/s/sz_qvhbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4s7d7bjc"/><path class="sz_qvhbcu"/>`,
		"fallback": "basil:folder-user-solid",
	});
}

export default Component;
