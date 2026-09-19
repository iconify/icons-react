import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlgozrxrt.css';
import '../../css/h/hztm1ryfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlgozrxrt"/><path class="hztm1ryfl"/>`,
		"fallback": "boxicons:heart-square",
	});
}

export default Component;
