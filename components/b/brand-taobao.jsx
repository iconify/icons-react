import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cgzijcckg.css';
import '../../css/l/lf68-8b_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cgzijcckg"/><path class="lf68-8b_s"/></g>`,
		"fallback": "tabler:brand-taobao",
	});
}

export default Component;
