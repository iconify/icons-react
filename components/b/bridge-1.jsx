import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7j4sk1uh.css';
import '../../css/b/b9wjhcc3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g7j4sk1uh"/><path class="b9wjhcc3x"/></g>`,
		"fallback": "tdesign:bridge-1",
	});
}

export default Component;
