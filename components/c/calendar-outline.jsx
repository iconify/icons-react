import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_ewppbtl.css';
import '../../css/u/uqlamj4tr.css';
import '../../css/v/vtfwic-qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_ewppbtl"/><circle class="uqlamj4tr"/><path class="vtfwic-qn"/>`,
		"fallback": "eva:calendar-outline",
	});
}

export default Component;
