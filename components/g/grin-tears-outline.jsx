import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r-kk51bsn.css';
import '../../css/a/asbi-uwfa.css';
import '../../css/d/deju6fb9n.css';
import '../../css/x/xjd58kxuc.css';
import '../../css/h/h33ui5bld.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r-kk51bsn"/><path clip-rule="evenodd" class="asbi-uwfa"/><path class="deju6fb9n"/><path clip-rule="evenodd" class="xjd58kxuc"/><path class="h33ui5bld"/></g>`,
		"fallback": "glyphs:grin-tears-outline",
	});
}

export default Component;
