import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzyf_pbqj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzyf_pbqj"/>`,
		"fallback": "f7:checkmark-rectangle",
	});
}

export default Component;
