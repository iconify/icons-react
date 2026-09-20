import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd7m4fbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd7m4fbxm"/>`,
		"fallback": "tabler:heart-off",
	});
}

export default Component;
