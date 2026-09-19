import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/y/yw3246bko.css';
import '../../css/t/t2r54b8lm.css';
import '../../css/n/nr94pie1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="yw3246bko"/><path class="t2r54b8lm"/><path class="nr94pie1e"/></g>`,
		"fallback": "iconamoon:briefcase-bold",
	});
}

export default Component;
