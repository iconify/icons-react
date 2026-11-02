import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo_nstm9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo_nstm9x"/>`,
		"fallback": "mingcute:circle-fading-plus-line",
	});
}

export default Component;
