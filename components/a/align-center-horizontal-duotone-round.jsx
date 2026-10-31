import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4_127bpi.css';
import '../../css/o/o8nax9bld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z4_127bpi"/><path class="o8nax9bld"/></g>`,
		"fallback": "coolicons:align-center-horizontal-duotone-round",
	});
}

export default Component;
