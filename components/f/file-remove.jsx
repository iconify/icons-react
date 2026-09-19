import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufyxqz38e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufyxqz38e"/>`,
		"fallback": "hugeicons:file-remove",
	});
}

export default Component;
