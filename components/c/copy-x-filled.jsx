import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuforsmvs.css';
import '../../css/r/r_3yuac4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuforsmvs"/><path class="r_3yuac4b"/>`,
		"fallback": "boxicons:copy-x-filled",
	});
}

export default Component;
