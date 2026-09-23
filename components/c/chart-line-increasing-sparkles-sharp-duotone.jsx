import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/p53xcyb3q.css';
import '../../css/h/hvs1cebde.css';
import '../../css/r/rrlah7bvq.css';
import '../../css/d/ddqtrn1yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="p53xcyb3q"/><path class="hvs1cebde"/><path class="rrlah7bvq"/><path class="ddqtrn1yy"/></g>`,
		"fallback": "keyline-icons:chart-line-increasing-sparkles-sharp-duotone",
	});
}

export default Component;
