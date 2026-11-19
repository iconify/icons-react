import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m95cihbre.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/m/mixyu8bak.css';
import '../../css/y/y_z52t9or.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m95cihbre"/><circle class="mpf1g8bav"/><circle class="mixyu8bak"/><path class="y_z52t9or"/></g>`,
		"fallback": "andrsrxn:chart-donut",
	});
}

export default Component;
