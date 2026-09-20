import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t2i8h7vmr.css';
import '../../css/r/rhi6q16-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t2i8h7vmr"/><path class="rhi6q16-e"/></g>`,
		"fallback": "keyline-icons:bar-chart-2-horizontal-start-two-tone",
	});
}

export default Component;
