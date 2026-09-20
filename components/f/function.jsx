import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/br9bb55fn.css';
import '../../css/c/c1rvh-buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="br9bb55fn"/><path class="c1rvh-buj"/></g>`,
		"fallback": "tabler:function",
	});
}

export default Component;
