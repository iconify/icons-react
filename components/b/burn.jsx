import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ladta5iqv.css';
import '../../css/y/y0ij68xok.css';
import '../../css/e/er5hh2b9a.css';
import '../../css/y/ylm9uq4vm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ladta5iqv"/><path class="y0ij68xok"/><path clip-rule="evenodd" class="er5hh2b9a"/><path class="ylm9uq4vm"/></g>`,
		"fallback": "glyphs-poly:burn",
	});
}

export default Component;
