import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cm7blcben.css';
import '../../css/r/rf-v0-ybr.css';
import '../../css/z/zvulze01h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cm7blcben"/><path class="rf-v0-ybr"/><path class="zvulze01h"/></g>`,
		"fallback": "tabler:bell-school",
	});
}

export default Component;
