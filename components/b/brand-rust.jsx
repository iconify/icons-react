import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/swvjn-w8t.css';
import '../../css/x/xzkkjsbsy.css';
import '../../css/h/hzs02tx3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="swvjn-w8t"/><path class="xzkkjsbsy"/><path class="hzs02tx3p"/></g>`,
		"fallback": "tabler:brand-rust",
	});
}

export default Component;
