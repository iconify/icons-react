import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t683n5mpp.css';
import '../../css/t/tssojcb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t683n5mpp"/><path class="tssojcb-b"/>`,
		"fallback": "eos-icons:application-incomplete-outlined",
	});
}

export default Component;
