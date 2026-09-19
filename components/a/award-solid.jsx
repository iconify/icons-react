import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsi1s7btx.css';
import '../../css/n/nhkex-b_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsi1s7btx"/><path clip-rule="evenodd" class="nhkex-b_o"/>`,
		"fallback": "basil:award-solid",
	});
}

export default Component;
