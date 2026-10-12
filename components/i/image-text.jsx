import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh5gj2bwp.css';
import '../../css/s/sybny9-7o.css';
import '../../css/a/aamk1-u4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kh5gj2bwp"/><path class="sybny9-7o"/><path class="aamk1-u4m"/></g>`,
		"fallback": "andrsrxn:image-text",
	});
}

export default Component;
