import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qq31b6swd.css';
import '../../css/q/q0seobblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qq31b6swd"/><path class="q0seobblq"/>`,
		"fallback": "boxicons:bell-minus",
	});
}

export default Component;
