import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5v1l59cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5v1l59cj"/>`,
		"fallback": "si:arrow-upward-duotone",
	});
}

export default Component;
