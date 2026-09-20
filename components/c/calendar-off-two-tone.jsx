import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ilgxfgbnl.css';
import '../../css/x/xa42z7llo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ilgxfgbnl"/><path class="xa42z7llo"/></g>`,
		"fallback": "keyline-icons:calendar-off-two-tone",
	});
}

export default Component;
