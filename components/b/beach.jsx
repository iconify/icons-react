import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k0acvlf-x.css';
import '../../css/b/b1sugsb4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k0acvlf-x"/><path class="b1sugsb4v"/></g>`,
		"fallback": "tabler:beach",
	});
}

export default Component;
