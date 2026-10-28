import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr-81f73c.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/i/ijzxuk1zw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gr-81f73c"/><path class="u5h8llb9a"/><path class="ijzxuk1zw"/></g>`,
		"fallback": "andrsrxn:globe-out",
	});
}

export default Component;
