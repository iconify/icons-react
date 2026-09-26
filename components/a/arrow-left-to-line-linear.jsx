import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/is08t52yx.css';
import '../../css/e/eoe13w36s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="is08t52yx"/><path class="eoe13w36s"/></g>`,
		"fallback": "solar:arrow-left-to-line-linear",
	});
}

export default Component;
