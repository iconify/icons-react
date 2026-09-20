import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wuyn7d7jn.css';
import '../../css/a/a_3rfj7ih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wuyn7d7jn"/><path class="a_3rfj7ih"/></g>`,
		"fallback": "proicons:background-color",
	});
}

export default Component;
