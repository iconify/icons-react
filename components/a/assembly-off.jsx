import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hbbzrh5bb.css';
import '../../css/o/o0qkey87y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hbbzrh5bb"/><path class="o0qkey87y"/></g>`,
		"fallback": "tabler:assembly-off",
	});
}

export default Component;
