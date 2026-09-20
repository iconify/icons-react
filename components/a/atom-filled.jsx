import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bjxt11j3n.css';
import '../../css/k/kmejg72ch.css';
import '../../css/k/kkj8cetyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bjxt11j3n"/><path clip-rule="evenodd" class="kmejg72ch"/><path class="kkj8cetyt"/></g>`,
		"fallback": "reicon:atom-filled",
	});
}

export default Component;
