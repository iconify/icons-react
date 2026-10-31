import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ge0pu2v_p.css';
import '../../css/a/amvyz_4ey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ge0pu2v_p"/><path class="amvyz_4ey"/></g>`,
		"fallback": "coolicons:image-off-duocolor-round",
	});
}

export default Component;
