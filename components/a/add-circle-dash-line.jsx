import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyk2onbgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyk2onbgj"/>`,
		"fallback": "mingcute:add-circle-dash-line",
	});
}

export default Component;
