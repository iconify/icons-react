import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msj8-dbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msj8-dbor"/>`,
		"fallback": "mingcute:fitness-line",
	});
}

export default Component;
