import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7_w9-itf.css';
import '../../css/z/zn77u3fhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7_w9-itf"/><path class="zn77u3fhb"/>`,
		"fallback": "solar:forbidden-circle-bold",
	});
}

export default Component;
