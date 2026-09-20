import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zcoq8glcz.css';
import '../../css/n/nkg961bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zcoq8glcz"/><path class="nkg961bcs"/></g>`,
		"fallback": "tdesign:color-invert",
	});
}

export default Component;
