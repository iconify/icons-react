import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj3efnj0f.css';
import '../../css/u/uuc_s46hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj3efnj0f wm-k"/><path class="uuc_s46hx wm-a"/>`,
		"fallback": "withicons-bauhaus:forward",
	});
}

export default Component;
