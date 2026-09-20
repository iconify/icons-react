import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-7zqub0t.css';
import '../../css/b/bjz3mberi.css';
import '../../css/i/i0h0r7bsw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p-7zqub0t"/><path class="bjz3mberi"/><path clip-rule="evenodd" class="i0h0r7bsw"/></g>`,
		"fallback": "streamline-color:instagram-flat",
	});
}

export default Component;
