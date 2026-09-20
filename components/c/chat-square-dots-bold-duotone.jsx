import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to8tv_bdi.css';
import '../../css/b/bsq_v5_ec.css';
import '../../css/c/cc53t4bin.css';
import '../../css/v/vrj59qcoz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="to8tv_bdi"/><path class="bsq_v5_ec"/><path class="cc53t4bin"/><path class="vrj59qcoz"/></g>`,
		"fallback": "solar:chat-square-dots-bold-duotone",
	});
}

export default Component;
