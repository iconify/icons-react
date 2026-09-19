import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ys5md9n0w.css';
import '../../css/z/zkrbpcbvx.css';
import '../../css/k/k_gphygrl.css';
import '../../css/f/fktx6ibcn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ys5md9n0w"/><path class="zkrbpcbvx"/><path class="k_gphygrl"/><path clip-rule="evenodd" class="fktx6ibcn"/></g>`,
		"fallback": "glyphs-poly:globe-stand-middle",
	});
}

export default Component;
