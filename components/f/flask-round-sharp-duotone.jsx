import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oana6q3yt.css';
import '../../css/j/jwbs-piju.css';
import '../../css/d/dx93_50hj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="oana6q3yt"/><path class="jwbs-piju"/><path class="dx93_50hj"/></g>`,
		"fallback": "keyline-icons:flask-round-sharp-duotone",
	});
}

export default Component;
