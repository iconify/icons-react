import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv3dy9bge.css';
import '../../css/y/ye62so_7n.css';
import '../../css/i/im3g8pbea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv3dy9bge"/><path clip-rule="evenodd" class="ye62so_7n"/><path class="im3g8pbea"/>`,
		"fallback": "solar:hourglass-line-bold-duotone",
	});
}

export default Component;
