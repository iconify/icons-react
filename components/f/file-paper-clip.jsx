import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pcipawbmd.css';
import '../../css/j/jwwcu_u6l.css';
import '../../css/e/ec1nrbb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pcipawbmd"/><path class="jwwcu_u6l"/><path class="ec1nrbb9q"/></g>`,
		"fallback": "andrsrxn:file-paper-clip",
	});
}

export default Component;
