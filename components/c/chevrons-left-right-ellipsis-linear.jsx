import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/th_2vrbuv.css';
import '../../css/o/oorbizavx.css';
import '../../css/g/ghv12qbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="th_2vrbuv"/><path class="oorbizavx"/><path class="ghv12qbis"/></g>`,
		"fallback": "solar:chevrons-left-right-ellipsis-linear",
	});
}

export default Component;
