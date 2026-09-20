import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_bz39b5m.css';
import '../../css/i/i4k204b6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t_bz39b5m"/><path class="i4k204b6q"/></g>`,
		"fallback": "tdesign:gesture-up-and-down",
	});
}

export default Component;
