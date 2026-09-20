import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lf3qp_-on.css';
import '../../css/z/zr7z1ql5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lf3qp_-on"/><path class="zr7z1ql5p"/></g>`,
		"fallback": "tabler:cube-unfolded",
	});
}

export default Component;
