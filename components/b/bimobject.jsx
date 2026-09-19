import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbz72vbvf.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbz72vbvf"/>`,
		"fallback": "fa-brands:bimobject",
	});
}

export default Component;
