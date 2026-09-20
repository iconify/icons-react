import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bhbh9x3rv.css';
import '../../css/d/d-aukbcus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bhbh9x3rv"/><path class="d-aukbcus"/></g>`,
		"fallback": "tdesign:call-1",
	});
}

export default Component;
