import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mp7bl7b1i.css';
import '../../css/h/htxleqb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mp7bl7b1i"/><path class="htxleqb5f"/></g>`,
		"fallback": "streamline-freehand-color:data-transfer-diagonal",
	});
}

export default Component;
