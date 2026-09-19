import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_l_77bcd.css';
import '../../css/h/hbryolsnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_l_77bcd"/><path class="hbryolsnu"/>`,
		"fallback": "boxicons:factory",
	});
}

export default Component;
