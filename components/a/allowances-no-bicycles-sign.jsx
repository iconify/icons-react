import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/am1ovqb9r.css';
import '../../css/h/h0ffmhi_f.css';
import '../../css/e/e5p014b7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="am1ovqb9r"/><path class="h0ffmhi_f"/><path class="e5p014b7f"/></g>`,
		"fallback": "streamline-freehand-color:allowances-no-bicycles-sign",
	});
}

export default Component;
