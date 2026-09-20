import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obf1m3bin.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obf1m3bin"/>`,
		"fallback": "ix:arrow-diagonal-bottom-right",
	});
}

export default Component;
