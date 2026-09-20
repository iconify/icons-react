import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/paij6d4qi.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGZzK013pm" class="paij6d4qi"/></defs><g class="ft5dv1b6b"><use href="#SVGZzK013pm"/><use href="#SVGZzK013pm" class="p_3zmsvya"/></g>`,
		"fallback": "tdesign:forward",
	});
}

export default Component;
