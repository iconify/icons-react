import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xcv31pbge.css';
import '../../css/x/xglusac3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xcv31pbge"/><path class="xglusac3x"/></g>`,
		"fallback": "coolicons:chart-bar-vertical-duotone-round",
	});
}

export default Component;
