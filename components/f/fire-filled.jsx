import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjer4-bfp.css';
import '../../css/y/yn-kc5b0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjer4-bfp"/><path class="yn-kc5b0s"/>`,
		"fallback": "boxicons:fire-filled",
	});
}

export default Component;
