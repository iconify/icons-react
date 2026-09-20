import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ww0uzbbvf.css';
import '../../css/l/lbkcqfo9k.css';
import '../../css/a/a144y4bxc.css';
import '../../css/a/acdpkpb0m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ww0uzbbvf"/><path clip-rule="evenodd" class="lbkcqfo9k"/><path class="a144y4bxc"/><path class="acdpkpb0m"/></g>`,
		"fallback": "streamline-flex-color:floppy-disk",
	});
}

export default Component;
