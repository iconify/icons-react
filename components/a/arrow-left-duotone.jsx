import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nnx36bbyq.css';
import '../../css/b/b20fk69oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nnx36bbyq"/><path class="b20fk69oz"/></g>`,
		"fallback": "reicon:arrow-left-duotone",
	});
}

export default Component;
