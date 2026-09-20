import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fykunprjc.css';
import '../../css/j/jxgns_app.css';
import '../../css/u/u8u9_5smu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fykunprjc"/><path class="jxgns_app"/><rect class="u8u9_5smu"/></g>`,
		"fallback": "lucide:clipboard-paste",
	});
}

export default Component;
