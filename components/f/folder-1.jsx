import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9g6oacnw.css';
import '../../css/z/z4fibab1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h9g6oacnw"/><path class="z4fibab1f"/></g>`,
		"fallback": "tdesign:folder-1",
	});
}

export default Component;
