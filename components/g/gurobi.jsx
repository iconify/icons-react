import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnn0zzboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnn0zzboo"/>`,
		"fallback": "thesvg-color:gurobi",
	});
}

export default Component;
