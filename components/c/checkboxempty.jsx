import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv2zpyesr.css';

const viewBox = {"width":591,"height":677};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv2zpyesr"/>`,
		"fallback": "ls:checkboxempty",
	});
}

export default Component;
