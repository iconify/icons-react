import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnh7raclo.css';
import '../../css/y/ypaszccgp.css';
import '../../css/x/xquxmub6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wnh7raclo"/><path class="ypaszccgp"/><rect class="xquxmub6v"/></g>`,
		"fallback": "lets-icons:export-duotone-line",
	});
}

export default Component;
