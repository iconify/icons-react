import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q419ru8nj.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q419ru8nj"/>`,
		"fallback": "fa6-solid:3",
	});
}

export default Component;
