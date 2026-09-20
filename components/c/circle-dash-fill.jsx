import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dspnf0f_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dspnf0f_i"/>`,
		"fallback": "mingcute:circle-dash-fill",
	});
}

export default Component;
