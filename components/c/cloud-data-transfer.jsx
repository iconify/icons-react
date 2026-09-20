import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k_43d1i4e.css';
import '../../css/h/hpw48gbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k_43d1i4e"/><path class="hpw48gbnv"/></g>`,
		"fallback": "streamline-freehand-color:cloud-data-transfer",
	});
}

export default Component;
