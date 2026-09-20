import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x8kn_5zmh.css';
import '../../css/z/zoah2g7wx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x8kn_5zmh"/><path class="zoah2g7wx"/></g>`,
		"fallback": "lucide:bottle-wine",
	});
}

export default Component;
