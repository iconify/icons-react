import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y-t9991ny.css';
import '../../css/u/u-idn-bit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y-t9991ny"/><path class="u-idn-bit"/></g>`,
		"fallback": "solar:dumbbells-linear",
	});
}

export default Component;
