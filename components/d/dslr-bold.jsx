import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mnkmowbvd.css';
import '../../css/t/tce4c780d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mnkmowbvd"/><path clip-rule="evenodd" class="tce4c780d"/></g>`,
		"fallback": "glyphs:dslr-bold",
	});
}

export default Component;
