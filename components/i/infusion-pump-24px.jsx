import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yhyxxfbqp.css';
import '../../css/c/cvwqk603y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yhyxxfbqp"/><path class="cvwqk603y"/></g>`,
		"fallback": "healthicons:infusion-pump-24px",
	});
}

export default Component;
