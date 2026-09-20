import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_5ip2btw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_5ip2btw"/>`,
		"fallback": "streamline-color:arrow-transfer-diagonal-3",
	});
}

export default Component;
