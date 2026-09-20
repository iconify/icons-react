import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nxk1ombxm.css';
import '../../css/l/lep-sqbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nxk1ombxm"/><path class="lep-sqbim"/></g>`,
		"fallback": "si:ai-alt-1-duotone",
	});
}

export default Component;
