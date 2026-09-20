import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lztc1r74z.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lztc1r74z"/>`,
		"fallback": "system-uicons:grab",
	});
}

export default Component;
