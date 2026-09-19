import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/v/vzu1opg_x.css';
import '../../css/y/y9w4d7b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="vzu1opg_x"/><path class="y9w4d7b2o"/></g>`,
		"fallback": "humbleicons:corner-left-down",
	});
}

export default Component;
