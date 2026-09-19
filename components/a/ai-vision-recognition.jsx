import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/gbz8_dbfr.css';
import '../../css/g/gp7ailbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="gbz8_dbfr"/><path class="gp7ailbzh"/></g>`,
		"fallback": "hugeicons:ai-vision-recognition",
	});
}

export default Component;
