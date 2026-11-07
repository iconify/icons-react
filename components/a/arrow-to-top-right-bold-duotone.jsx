import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-d-8tewy.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/h/hfqsmecof.css';
import '../../css/q/qb_h7yw5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e-d-8tewy"/><g class="xtpeb-edw"><path class="hfqsmecof"/><path class="qb_h7yw5a"/></g>`,
		"fallback": "solar:arrow-to-top-right-bold-duotone",
	});
}

export default Component;
