import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i5ypyoehl.css';
import '../../css/l/l12_cmb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i5ypyoehl"/><path class="l12_cmb5r"/></g>`,
		"fallback": "keyline-icons:bar-chart-horizontal-end-two-tone",
	});
}

export default Component;
