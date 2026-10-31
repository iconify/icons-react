import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nn6caob4n.css';
import '../../css/a/aretu2cvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nn6caob4n"/><path class="aretu2cvj"/></g>`,
		"fallback": "coolicons:coffee-bulk-round",
	});
}

export default Component;
