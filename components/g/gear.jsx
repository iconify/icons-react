import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/h/hwmy78bep.css';
import '../../css/g/gw-3o2bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="hwmy78bep"/><path class="gw-3o2bdq"/></g>`,
		"fallback": "akar-icons:gear",
	});
}

export default Component;
