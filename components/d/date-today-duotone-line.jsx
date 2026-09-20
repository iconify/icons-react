import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukm9jj2re.css';
import '../../css/w/ww921tq1d.css';
import '../../css/g/ga2yrzb2l.css';
import '../../css/r/r_u70yb1q.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGIwD8Vc3U"><g class="ukm9jj2re"><path class="ww921tq1d"/><rect class="ga2yrzb2l"/><path class="r_u70yb1q"/></g></mask></defs><path mask="url(#SVGIwD8Vc3U)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:date-today-duotone-line",
	});
}

export default Component;
