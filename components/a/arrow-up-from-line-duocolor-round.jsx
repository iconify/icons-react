import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/riisj1nkm.css';
import '../../css/s/s-207ebhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="riisj1nkm"/><path class="s-207ebhv"/></g>`,
		"fallback": "coolicons:arrow-up-from-line-duocolor-round",
	});
}

export default Component;
