import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ianaz7b0e.css';
import '../../css/w/wf89k6buf.css';
import '../../css/d/db-k4n35p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ianaz7b0e"/><path class="wf89k6buf"/><path class="db-k4n35p"/></g>`,
		"fallback": "solar:info-square-line-duotone",
	});
}

export default Component;
