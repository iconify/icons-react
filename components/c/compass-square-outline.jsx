import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trt_o2bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="trt_o2bfg"/>`,
		"fallback": "solar:compass-square-outline",
	});
}

export default Component;
