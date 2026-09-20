import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gponh5b7h.css';
import '../../css/z/zxg1t5bmt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gponh5b7h"/><path class="zxg1t5bmt"/></g>`,
		"fallback": "keyline-icons:hand-heart-fill",
	});
}

export default Component;
