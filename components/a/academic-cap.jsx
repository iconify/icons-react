import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mgbhl21qs.css';
import '../../css/y/yo019rtxz.css';
import '../../css/i/il854jbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mgbhl21qs"/><path class="yo019rtxz"/><path class="il854jbvx"/></g>`,
		"fallback": "heroicons-outline:academic-cap",
	});
}

export default Component;
