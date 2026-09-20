import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q4fatpb_e.css';
import '../../css/d/dzm5ulgsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q4fatpb_e"/><path class="dzm5ulgsw"/></g>`,
		"fallback": "reicon:gameboy",
	});
}

export default Component;
