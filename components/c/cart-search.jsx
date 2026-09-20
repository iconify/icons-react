import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nnzq1t7sf.css';
import '../../css/m/mgzjqrb8f.css';
import '../../css/u/ut6qe_byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nnzq1t7sf"/><path class="mgzjqrb8f"/><path class="ut6qe_byt"/></g>`,
		"fallback": "tabler:cart-search",
	});
}

export default Component;
