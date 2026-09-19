import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcr-_t1sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcr-_t1sf"/>`,
		"fallback": "hugeicons:ease-out-control-point",
	});
}

export default Component;
