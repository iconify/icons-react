import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ha6mz0tun.css';
import '../../css/a/asuyzm3pa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ha6mz0tun"/><path class="asuyzm3pa"/></g>`,
		"fallback": "tdesign:garlic",
	});
}

export default Component;
