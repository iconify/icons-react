import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zwkxz3odb.css';
import '../../css/a/a_e_k51qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zwkxz3odb"/><path class="a_e_k51qy"/></g>`,
		"fallback": "tabler:basket-star",
	});
}

export default Component;
