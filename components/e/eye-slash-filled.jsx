import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ffuelabgd.css';
import '../../css/e/eekg0xfez.css';
import '../../css/l/l5fjtpb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ffuelabgd"/><path class="eekg0xfez"/><path class="l5fjtpb-q"/></g>`,
		"fallback": "reicon:eye-slash-filled",
	});
}

export default Component;
