import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_vuxg-xv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_vuxg-xv"/>`,
		"fallback": "la:file-excel-solid",
	});
}

export default Component;
