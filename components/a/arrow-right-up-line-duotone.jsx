import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ygpzi6bzb.css';
import '../../css/l/lzc0iw4ot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ygpzi6bzb"/><path class="lzc0iw4ot"/></g>`,
		"fallback": "solar:arrow-right-up-line-duotone",
	});
}

export default Component;
