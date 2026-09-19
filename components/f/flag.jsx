import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql38_tbjb.css';

const viewBox = {"width":640,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql38_tbjb"/>`,
		"fallback": "il:flag",
	});
}

export default Component;
