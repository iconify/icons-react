import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_1x96bbx.css';
import '../../css/k/k0469ab1k.css';
import '../../css/j/jf9d76bbb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="i_1x96bbx"/><rect class="k0469ab1k"/><rect class="jf9d76bbb"/></g>`,
		"fallback": "glyphs-poly:box-layout-2",
	});
}

export default Component;
