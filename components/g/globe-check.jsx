import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpkn3moxh.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/e/evgjvnn5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gpkn3moxh"/><path class="u5h8llb9a"/><path class="evgjvnn5p"/></g>`,
		"fallback": "andrsrxn:globe-check",
	});
}

export default Component;
