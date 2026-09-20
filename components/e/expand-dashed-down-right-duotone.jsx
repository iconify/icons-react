import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b_0km7o6f.css';
import '../../css/k/ks2nvkbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b_0km7o6f"/><path class="ks2nvkbhl"/></g>`,
		"fallback": "keyline-icons:expand-dashed-down-right-duotone",
	});
}

export default Component;
