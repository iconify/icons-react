import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d1ynh9bed.css';
import '../../css/m/mr89eubmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d1ynh9bed"/><path clip-rule="evenodd" class="mr89eubmc"/></g>`,
		"fallback": "reicon:doc-add-filled",
	});
}

export default Component;
