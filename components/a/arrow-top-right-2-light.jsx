import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdvmzyv3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdvmzyv3d"/>`,
		"fallback": "iconamoon:arrow-top-right-2-light",
	});
}

export default Component;
