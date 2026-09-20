import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnlcl2u2k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnlcl2u2k"/>`,
		"fallback": "zondicons:align-justified",
	});
}

export default Component;
