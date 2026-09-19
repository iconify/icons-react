import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/i/izng5fq1f.css';
import '../../css/h/hl_ui8b2z.css';
import '../../css/k/k763p5bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="izng5fq1f"/><path class="hl_ui8b2z"/><path class="k763p5bdy"/></g>`,
		"fallback": "hugeicons:briefcase-05",
	});
}

export default Component;
