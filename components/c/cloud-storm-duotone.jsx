import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b8xdmf6ee.css';
import '../../css/q/qahh7jj6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b8xdmf6ee"/><path class="qahh7jj6e"/></g>`,
		"fallback": "reicon:cloud-storm-duotone",
	});
}

export default Component;
