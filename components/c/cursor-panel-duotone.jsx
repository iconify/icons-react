import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/em26ztdwf.css';
import '../../css/m/mebe1hh7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="em26ztdwf"/><path class="mebe1hh7p"/></g>`,
		"fallback": "keyline-icons:cursor-panel-duotone",
	});
}

export default Component;
