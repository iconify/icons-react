import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1mqx4hvm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1mqx4hvm"/>`,
		"fallback": "famicons:balloon",
	});
}

export default Component;
