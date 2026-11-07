import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7y0uxbsp.css';
import '../../css/l/l1ebf737s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7y0uxbsp"/><path clip-rule="evenodd" class="l1ebf737s"/>`,
		"fallback": "solar:cpu-bold",
	});
}

export default Component;
