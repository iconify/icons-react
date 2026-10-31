import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iz8z_7b0m.css';
import '../../css/c/cxraxmb0q.css';
import '../../css/x/x_0hs-bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iz8z_7b0m"/><path class="cxraxmb0q"/><path class="x_0hs-bvf"/></g>`,
		"fallback": "struq:bug",
	});
}

export default Component;
