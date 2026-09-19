import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt57vq-0m.css';
import '../../css/z/zlx_zlb4h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt57vq-0m"/><path class="zlx_zlb4h"/>`,
		"fallback": "famicons:battery-full-sharp",
	});
}

export default Component;
