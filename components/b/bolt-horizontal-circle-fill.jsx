import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4wra6ukb.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4wra6ukb"/>`,
		"fallback": "f7:bolt-horizontal-circle-fill",
	});
}

export default Component;
