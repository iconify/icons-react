import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8b_mqwey.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/a/axxvbbbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGigIxTbSU" class="h8b_mqwey"/></defs><g class="ft5dv1b6b"><use href="#SVGigIxTbSU"/><use href="#SVGigIxTbSU" class="p_3zmsvya"/><path class="axxvbbbrp"/></g>`,
		"fallback": "tdesign:collapsible-block",
	});
}

export default Component;
