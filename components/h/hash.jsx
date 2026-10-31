import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rzk031b4a.css';
import '../../css/d/dns_8jbpx.css';
import '../../css/h/hdo5hq__j.css';
import '../../css/t/ta9496p1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rzk031b4a wm-shadow"/><path class="dns_8jbpx wm-shadow"/><path class="hdo5hq__j"/><path class="ta9496p1i"/></g>`,
		"fallback": "withicons-brutal:hash",
	});
}

export default Component;
