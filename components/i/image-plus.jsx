import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q17t251rw.css';
import '../../css/y/yvf9cwdfi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q17t251rw"/><path class="yvf9cwdfi"/>`,
		"fallback": "cil:image-plus",
	});
}

export default Component;
