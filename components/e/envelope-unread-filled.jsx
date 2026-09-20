import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uwcr51zys.css';
import '../../css/a/annj9w32n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uwcr51zys"/><path clip-rule="evenodd" class="annj9w32n"/></g>`,
		"fallback": "reicon:envelope-unread-filled",
	});
}

export default Component;
