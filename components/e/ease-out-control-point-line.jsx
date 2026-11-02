import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f94_otbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f94_otbkw"/>`,
		"fallback": "mingcute:ease-out-control-point-line",
	});
}

export default Component;
