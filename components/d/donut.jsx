import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x5lto4myw.css';
import '../../css/b/be1091uiv.css';
import '../../css/z/z_jl5dk2k.css';
import '../../css/f/f-mn8yb0c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x5lto4myw"/><path class="be1091uiv"/><path class="z_jl5dk2k"/><path class="f-mn8yb0c"/></g>`,
		"fallback": "streamline-color:donut",
	});
}

export default Component;
