import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_93su88i.css';
import '../../css/v/viznwcc0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_93su88i"/><path class="viznwcc0i"/>`,
		"fallback": "bx:bxs-image-add",
	});
}

export default Component;
