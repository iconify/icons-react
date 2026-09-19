import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h39n9xbvk.css';
import '../../css/h/hz82di4ei.css';
import '../../css/b/b5r2-9b9m.css';
import '../../css/i/i2uebbkhw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h39n9xbvk"/><rect class="hz82di4ei"/><rect class="b5r2-9b9m"/><rect class="i2uebbkhw"/></g>`,
		"fallback": "glyphs:ellipsis-circle-bold",
	});
}

export default Component;
