import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ng9vtx4ft.css';
import '../../css/h/h4t313bie.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ng9vtx4ft"/><path class="h4t313bie"/></g>`,
		"fallback": "pepicons-pencil:eye-closed",
	});
}

export default Component;
