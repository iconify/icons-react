import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caw1diebi.css';
import '../../css/s/sxij2rbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caw1diebi"/><path class="sxij2rbwq"/>`,
		"fallback": "boxicons:egg-yolk",
	});
}

export default Component;
