import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m452x-bjv.css';
import '../../css/i/iw0exkk1c.css';
import '../../css/s/shmqb_b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m452x-bjv"/><path class="iw0exkk1c"/><path class="shmqb_b9r"/></g>`,
		"fallback": "streamline-freehand-color:cloud-loading-1",
	});
}

export default Component;
