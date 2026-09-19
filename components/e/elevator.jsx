import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dkox_ob8g.css';
import '../../css/s/srzy8c7jv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dkox_ob8g"/><path class="srzy8c7jv"/></g>`,
		"fallback": "iconoir:elevator",
	});
}

export default Component;
