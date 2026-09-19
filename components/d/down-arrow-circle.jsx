import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgo18hbkg.css';
import '../../css/h/hd_yihbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgo18hbkg"/><path class="hd_yihbkn"/>`,
		"fallback": "bx:down-arrow-circle",
	});
}

export default Component;
