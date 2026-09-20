import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wavbaozgl.css';
import '../../css/b/bhvvcjqlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wavbaozgl"/><path class="bhvvcjqlf"/></g>`,
		"fallback": "vadivam:banknote-arrow-up",
	});
}

export default Component;
