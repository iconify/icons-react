import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fb2b0ybzm.css';
import '../../css/h/hh_0hfbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fb2b0ybzm"/><path class="hh_0hfbvf"/></g>`,
		"fallback": "tabler:air-conditioning-disabled",
	});
}

export default Component;
