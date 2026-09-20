import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rbmj0yx6b.css';
import '../../css/x/xwir2bcln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rbmj0yx6b"/><path class="xwir2bcln"/></g>`,
		"fallback": "keyline-icons:cursor-click-sharp-duotone",
	});
}

export default Component;
