import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6re2cboh.css';
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
		"content": `<defs><path id="SVGzKSuAdvA" class="t6re2cboh"/></defs><g class="ft5dv1b6b"><use href="#SVGzKSuAdvA"/><use href="#SVGzKSuAdvA" class="p_3zmsvya"/></g>`,
		"fallback": "tdesign:backward",
	});
}

export default Component;
