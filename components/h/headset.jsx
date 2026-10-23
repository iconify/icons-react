import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tnksdle-b.css';
import '../../css/k/k2aql0b9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tnksdle-b"/><path class="k2aql0b9t"/></g>`,
		"fallback": "vadivam:headset",
	});
}

export default Component;
