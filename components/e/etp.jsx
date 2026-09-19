import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qygi0x8_o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qygi0x8_o"/>`,
		"fallback": "cryptocurrency:etp",
	});
}

export default Component;
