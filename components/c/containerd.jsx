import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc5kx8b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc5kx8b5r"/>`,
		"fallback": "thesvg-color:containerd",
	});
}

export default Component;
