import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3fg58wzn.css';
import '../../css/g/g_zluxtrj.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3fg58wzn"/><path class="g_zluxtrj"/>`,
		"fallback": "lineicons:briefcase-plus-1",
	});
}

export default Component;
