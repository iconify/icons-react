import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mrsyw6beb.css';
import '../../css/h/hjtkjeaex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="mrsyw6beb"/><path class="hjtkjeaex"/></g>`,
		"fallback": "matita:angle",
	});
}

export default Component;
