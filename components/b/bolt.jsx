import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mrzt1zbgi.css';
import '../../css/m/m_r0vbq0f.css';
import '../../css/o/o85glehef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mrzt1zbgi"/><path class="m_r0vbq0f"/><circle class="o85glehef"/></g>`,
		"fallback": "andrsrxn:bolt",
	});
}

export default Component;
