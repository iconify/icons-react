import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbegpb7cr.css';
import '../../css/h/hu9q9y9ih.css';
import '../../css/r/rxfpo_vyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bbegpb7cr"/><path class="hu9q9y9ih"/><path class="rxfpo_vyh"/></g>`,
		"fallback": "solar:gallery-minimalistic-bold-duotone",
	});
}

export default Component;
