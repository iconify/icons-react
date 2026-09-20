import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfja7nbel.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfja7nbel"/>`,
		"fallback": "la:bread-slice-solid",
	});
}

export default Component;
