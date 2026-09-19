import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsrhq3bin.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsrhq3bin"/>`,
		"fallback": "f7:bitcoin-circle",
	});
}

export default Component;
