import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fr8uwcchq.css';
import '../../css/i/i5pctfbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fr8uwcchq"/><path class="i5pctfbry"/></g>`,
		"fallback": "reicon:align-top-filled",
	});
}

export default Component;
