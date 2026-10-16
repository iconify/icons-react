import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zmlsui48u.css';
import '../../css/z/z0behcbdu.css';
import '../../css/w/wylo50btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zmlsui48u"/><path class="z0behcbdu"/><path class="wylo50btx"/></g>`,
		"fallback": "andrsrxn:image-search",
	});
}

export default Component;
