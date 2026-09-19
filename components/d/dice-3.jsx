import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpoubbo_e.css';
import '../../css/w/wr4cx4b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpoubbo_e"/><path class="wr4cx4b8o"/>`,
		"fallback": "boxicons:dice-3",
	});
}

export default Component;
