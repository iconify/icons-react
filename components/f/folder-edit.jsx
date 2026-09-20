import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ybgntz_nh.css';
import '../../css/d/dooqx60fq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ybgntz_nh"/><path class="dooqx60fq"/></g>`,
		"fallback": "lucide:folder-edit",
	});
}

export default Component;
