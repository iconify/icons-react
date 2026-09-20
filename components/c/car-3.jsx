import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z54pwwbag.css';
import '../../css/l/lttyhsb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z54pwwbag"/><path class="lttyhsb5p"/></g>`,
		"fallback": "streamline-ultimate:car-3",
	});
}

export default Component;
