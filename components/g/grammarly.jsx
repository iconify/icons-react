import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usf8_8x2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="usf8_8x2o"/>`,
		"fallback": "lineicons:grammarly",
	});
}

export default Component;
