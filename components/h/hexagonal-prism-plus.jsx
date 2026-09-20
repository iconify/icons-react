import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o0hhdtm8h.css';
import '../../css/y/yr2yzgbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o0hhdtm8h"/><path class="yr2yzgbgz"/></g>`,
		"fallback": "tabler:hexagonal-prism-plus",
	});
}

export default Component;
