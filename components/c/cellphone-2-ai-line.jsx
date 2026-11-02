import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-_ho8emr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-_ho8emr"/>`,
		"fallback": "mingcute:cellphone-2-ai-line",
	});
}

export default Component;
