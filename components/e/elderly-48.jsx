import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg5rndhrj.css';
import '../../css/p/p_68d_bud.css';
import '../../css/u/uogifmbba.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg5rndhrj"/><path class="p_68d_bud"/><path class="uogifmbba"/>`,
		"fallback": "energy-icons:elderly-48",
	});
}

export default Component;
