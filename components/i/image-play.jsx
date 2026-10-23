import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mn765hb_v.css';
import '../../css/a/a1j0enb0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mn765hb_v"/><path class="a1j0enb0i"/></g>`,
		"fallback": "vadivam:image-play",
	});
}

export default Component;
