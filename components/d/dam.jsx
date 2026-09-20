import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/et9u4cbhy.css';
import '../../css/k/ki61swb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="et9u4cbhy"/><path class="ki61swb4u"/></g>`,
		"fallback": "tdesign:dam",
	});
}

export default Component;
