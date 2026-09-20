import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/p/pcbu8kb2s.css';
import '../../css/s/sj1_gtb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="pcbu8kb2s"/><path class="sj1_gtb0i"/></g>`,
		"fallback": "lets-icons:calendar-add",
	});
}

export default Component;
