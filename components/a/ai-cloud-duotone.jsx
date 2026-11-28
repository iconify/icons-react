import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sieqd1bgm.css';
import '../../css/b/bokfp2bwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary sieqd1bgm"/><path class="bokfp2bwk primary"/></g>`,
		"fallback": "iconaut:ai-cloud-duotone",
	});
}

export default Component;
