import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz32weafm.css';
import '../../css/t/tawx_qbnz.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz32weafm"/><path class="tawx_qbnz"/>`,
		"fallback": "lineicons:circle-minus",
	});
}

export default Component;
