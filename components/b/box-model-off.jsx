import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d2814bbvd.css';
import '../../css/j/jl59u7bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d2814bbvd"/><path class="jl59u7bkn"/></g>`,
		"fallback": "tabler:box-model-off",
	});
}

export default Component;
