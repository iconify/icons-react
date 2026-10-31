import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq2ci_q3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq2ci_q3t"/>`,
		"fallback": "coolicons:horse-fill-round",
	});
}

export default Component;
