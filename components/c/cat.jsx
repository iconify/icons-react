import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v9dp49bqe.css';
import '../../css/s/sm3j_cbmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v9dp49bqe"/><path class="sm3j_cbmb"/></g>`,
		"fallback": "tabler:cat",
	});
}

export default Component;
