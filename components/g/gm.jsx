import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okn4h4bva.css';
import '../../css/s/sgh8jz96b.css';
import '../../css/y/ycrtwzb4n.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="okn4h4bva"/><path clip-rule="evenodd" class="sgh8jz96b"/><path class="ycrtwzb4n"/></g>`,
		"fallback": "flagpack:gm",
	});
}

export default Component;
