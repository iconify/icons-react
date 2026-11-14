import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3sdo1bpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3sdo1bpk"/>`,
		"fallback": "hugeicons:credit-card-accept",
	});
}

export default Component;
