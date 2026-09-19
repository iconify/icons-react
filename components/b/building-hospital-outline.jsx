import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m-pr96kgv.css';
import '../../css/k/kmjw4165b.css';
import '../../css/j/jtpo4t6rz.css';
import '../../css/e/eywdkpbyj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m-pr96kgv"/><path class="kmjw4165b"/><path class="jtpo4t6rz"/><path class="eywdkpbyj"/></g>`,
		"fallback": "glyphs:building-hospital-outline",
	});
}

export default Component;
