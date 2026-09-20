import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqcq3__zz.css';
import '../../css/q/qoemgvxzn.css';
import '../../css/t/tnn4g4bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hqcq3__zz"/><path class="qoemgvxzn"/><path class="tnn4g4bff"/></g>`,
		"fallback": "tabler:file-arrow-left",
	});
}

export default Component;
