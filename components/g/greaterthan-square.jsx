import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klxp3_jad.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klxp3_jad"/>`,
		"fallback": "f7:greaterthan-square",
	});
}

export default Component;
