import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc6pxob3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc6pxob3d"/>`,
		"fallback": "noviair:crown",
	});
}

export default Component;
