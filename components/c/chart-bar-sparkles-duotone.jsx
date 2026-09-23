import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s4p403bih.css';
import '../../css/c/c1_mkf7lu.css';
import '../../css/x/xon_9ib8a.css';
import '../../css/f/fd4i3sbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s4p403bih"/><path class="c1_mkf7lu"/><path class="xon_9ib8a"/><path class="fd4i3sbcs"/></g>`,
		"fallback": "keyline-icons:chart-bar-sparkles-duotone",
	});
}

export default Component;
