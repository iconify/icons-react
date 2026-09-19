import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/d/d5_1zjbjn.css';
import '../../css/n/n2b_1ac0y.css';
import '../../css/k/kfz17clka.css';
import '../../css/h/h-n5wackw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="d5_1zjbjn"/><path class="n2b_1ac0y"/><path class="kfz17clka"/><path class="h-n5wackw"/></g>`,
		"fallback": "iconoir:drag-solid",
	});
}

export default Component;
