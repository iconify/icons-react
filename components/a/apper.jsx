import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr0_ucrte.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr0_ucrte"/>`,
		"fallback": "fa-brands:apper",
	});
}

export default Component;
