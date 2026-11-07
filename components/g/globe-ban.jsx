import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nl9_-acrh.css';
import '../../css/j/j2hvpnbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nl9_-acrh"/><path class="j2hvpnbcg"/></g>`,
		"fallback": "vadivam:globe-ban",
	});
}

export default Component;
