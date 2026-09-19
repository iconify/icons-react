import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-5zx-b9n.css';
import '../../css/l/l437umi1x.css';
import '../../css/a/a2r_75btl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b-5zx-b9n"/><path class="l437umi1x"/><path class="a2r_75btl"/></g>`,
		"fallback": "glyphs-poly:box-close",
	});
}

export default Component;
