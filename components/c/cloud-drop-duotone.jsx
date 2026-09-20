import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qahh7jj6e.css';
import '../../css/h/h7h652lyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qahh7jj6e"/><path class="h7h652lyt"/></g>`,
		"fallback": "reicon:cloud-drop-duotone",
	});
}

export default Component;
