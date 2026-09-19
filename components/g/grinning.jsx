import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/w29_8_wpi.css';
import '../../css/r/rqnixx5da.css';
import '../../css/n/npwto8z6c.css';
import '../../css/e/eiyt9iiys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="w29_8_wpi"/><path class="rqnixx5da"/><path class="npwto8z6c"/><path class="eiyt9iiys"/></g>`,
		"fallback": "hugeicons:grinning",
	});
}

export default Component;
