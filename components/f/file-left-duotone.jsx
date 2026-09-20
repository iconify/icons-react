import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x4lnlsbhw.css';
import '../../css/f/fqs8ozsgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x4lnlsbhw"/><path class="fqs8ozsgb"/></g>`,
		"fallback": "reicon:file-left-duotone",
	});
}

export default Component;
