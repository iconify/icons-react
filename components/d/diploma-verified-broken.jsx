import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h3qxpo6ss.css';
import '../../css/n/n1_ykhn3f.css';
import '../../css/g/gims79b8a.css';
import '../../css/q/qv3q18vvu.css';
import '../../css/a/a0l-fdc8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h3qxpo6ss"/><path class="n1_ykhn3f"/><path class="gims79b8a"/><path class="qv3q18vvu"/><path class="a0l-fdc8b"/></g>`,
		"fallback": "solar:diploma-verified-broken",
	});
}

export default Component;
