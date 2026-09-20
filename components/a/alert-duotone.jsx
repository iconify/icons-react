import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lkfxckb7l.css';
import '../../css/d/dmh90m3uy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lkfxckb7l"/><path class="dmh90m3uy"/></g>`,
		"fallback": "si:alert-duotone",
	});
}

export default Component;
