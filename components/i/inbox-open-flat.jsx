import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_j3ddv5a.css';
import '../../css/p/pe8yj-8iy.css';
import '../../css/z/z10r9ukws.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a_j3ddv5a"/><path class="pe8yj-8iy"/><path clip-rule="evenodd" class="z10r9ukws"/></g>`,
		"fallback": "streamline-flex-color:inbox-open-flat",
	});
}

export default Component;
