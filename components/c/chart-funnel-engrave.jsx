import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/glpyvrt8s.css';
import '../../css/g/gqtz-uhbr.css';
import '../../css/d/dakzdk03i.css';
import '../../css/f/flbsvpbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="glpyvrt8s wm-k"/><path class="gqtz-uhbr wm-shadow"/><path class="dakzdk03i wm-k"/><path class="flbsvpbyj wm-a"/></g>`,
		"fallback": "withicons:chart-funnel-engrave",
	});
}

export default Component;
