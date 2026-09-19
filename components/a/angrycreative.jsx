import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb_r3_53g.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb_r3_53g"/>`,
		"fallback": "fa7-brands:angrycreative",
	});
}

export default Component;
