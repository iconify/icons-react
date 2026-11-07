import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yn7wcebed.css';
import '../../css/e/eswrkkbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yn7wcebed"/><path class="eswrkkbdf"/>`,
		"fallback": "solar:double-alt-arrow-down-bold",
	});
}

export default Component;
