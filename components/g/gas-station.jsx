import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bw5qszl1f.css';
import '../../css/h/h5lbcq9ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="bw5qszl1f"/><path class="h5lbcq9ql"/></g>`,
		"fallback": "tabler:gas-station",
	});
}

export default Component;
