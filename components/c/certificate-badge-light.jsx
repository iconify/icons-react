import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xrlf4hbhk.css';
import '../../css/i/iis6c2bta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xrlf4hbhk"/><path class="iis6c2bta"/></g>`,
		"fallback": "iconamoon:certificate-badge-light",
	});
}

export default Component;
