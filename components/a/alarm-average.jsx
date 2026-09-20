import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yxuglxb_b.css';
import '../../css/h/h3ibz_bvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yxuglxb_b"/><path class="h3ibz_bvs"/></g>`,
		"fallback": "tabler:alarm-average",
	});
}

export default Component;
