import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oana6q3yt.css';
import '../../css/i/ih3jxbb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="oana6q3yt"/><path class="ih3jxbb2h"/></g>`,
		"fallback": "keyline-icons:flask-round-sharp-two-tone",
	});
}

export default Component;
