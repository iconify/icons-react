import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a_o499-3k.css';
import '../../css/a/aalswdj8y.css';
import '../../css/u/uqly_26np.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="a_o499-3k"/><rect class="aalswdj8y"/><path class="uqly_26np"/></g>`,
		"fallback": "lucide:align-horizontal-space-between",
	});
}

export default Component;
