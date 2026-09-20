import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8pyz-fzo.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_3zmsvya.css';
import '../../css/h/hstpbebig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGcPdOtdJO" class="t8pyz-fzo"/></defs><g class="ft5dv1b6b"><use href="#SVGcPdOtdJO"/><use href="#SVGcPdOtdJO" class="p_3zmsvya"/><path class="hstpbebig"/></g>`,
		"fallback": "tdesign:grid-add",
	});
}

export default Component;
