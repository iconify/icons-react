import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zfn0bibwp.css';
import '../../css/k/kh2blbc8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zfn0bibwp"/><path class="kh2blbc8t"/></g>`,
		"fallback": "vadivam:binoculars",
	});
}

export default Component;
