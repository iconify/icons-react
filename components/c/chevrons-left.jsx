import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke3m0vsct.css';
import '../../css/j/jfaet3x_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke3m0vsct"/><path class="jfaet3x_q"/>`,
		"fallback": "bxs:chevrons-left",
	});
}

export default Component;
