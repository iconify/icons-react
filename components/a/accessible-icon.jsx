import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqfa2vbfx.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqfa2vbfx"/>`,
		"fallback": "fa6-brands:accessible-icon",
	});
}

export default Component;
