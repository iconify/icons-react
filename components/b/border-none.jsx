import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh_t_956l.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh_t_956l"/>`,
		"fallback": "fa6-solid:border-none",
	});
}

export default Component;
