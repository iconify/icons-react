import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr2sukbfv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr2sukbfv"/>`,
		"fallback": "subway:bag",
	});
}

export default Component;
