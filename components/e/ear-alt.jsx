import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slwo16b5l.css';
import '../../css/u/uv22sacky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slwo16b5l"/><path class="uv22sacky"/>`,
		"fallback": "boxicons:ear-alt",
	});
}

export default Component;
