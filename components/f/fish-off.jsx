import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r_i1pf3uq.css';
import '../../css/u/u-0851bxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r_i1pf3uq"/><path class="u-0851bxf"/></g>`,
		"fallback": "tabler:fish-off",
	});
}

export default Component;
