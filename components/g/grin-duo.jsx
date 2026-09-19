import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/t/t99-pnb2y.css';
import '../../css/a/a8924ab8w.css';
import '../../css/o/o_xfh8bmc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="t99-pnb2y"/><path class="a8924ab8w"/><path class="o_xfh8bmc"/></g>`,
		"fallback": "glyphs:grin-duo",
	});
}

export default Component;
