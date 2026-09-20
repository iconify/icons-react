import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r_-n52dss.css';
import '../../css/l/l5i-8rw-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r_-n52dss"/><path class="l5i-8rw-z"/></g>`,
		"fallback": "tabler:basket-dollar",
	});
}

export default Component;
