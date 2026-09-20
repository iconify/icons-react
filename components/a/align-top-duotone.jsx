import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5pctfbry.css';
import '../../css/u/uc9icwbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i5pctfbry"/><path clip-rule="evenodd" class="uc9icwbih"/></g>`,
		"fallback": "reicon:align-top-duotone",
	});
}

export default Component;
