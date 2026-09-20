import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jmxynkbul.css';
import '../../css/v/vdghd-b8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jmxynkbul"/><path class="vdghd-b8d"/></g>`,
		"fallback": "solar:heart-crack-broken",
	});
}

export default Component;
