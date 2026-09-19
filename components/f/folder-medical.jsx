import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6cys--0t.css';
import '../../css/t/tkn_mgown.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u6cys--0t"/><path clip-rule="evenodd" class="tkn_mgown"/></g>`,
		"fallback": "griddy-icons:folder-medical",
	});
}

export default Component;
