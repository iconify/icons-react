import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctf7tpbxx.css';
import '../../css/i/i_23a8b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctf7tpbxx"/><path class="i_23a8b0l"/>`,
		"fallback": "solar:alt-arrow-left-bold-duotone",
	});
}

export default Component;
