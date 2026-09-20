import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/edkp1uj2o.css';
import '../../css/t/tqsz8rfna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="edkp1uj2o"/><path class="tqsz8rfna"/></g>`,
		"fallback": "tabler:hemisphere-plus",
	});
}

export default Component;
