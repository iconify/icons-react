import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/su1x7ms2o.css';
import '../../css/u/u68km233t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="su1x7ms2o"/><path class="u68km233t"/></g>`,
		"fallback": "tabler:basket-x",
	});
}

export default Component;
