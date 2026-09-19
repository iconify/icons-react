import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gsurc6h1k.css';
import '../../css/i/i8r13qt0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gsurc6h1k"/><path class="i8r13qt0m"/></g>`,
		"fallback": "hugeicons:cardiogram-02",
	});
}

export default Component;
