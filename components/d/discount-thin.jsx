import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/d1jqbybzv.css';
import '../../css/q/qrkawlnfo.css';
import '../../css/y/ylt9lr2-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="d1jqbybzv"/><path class="qrkawlnfo"/><path class="ylt9lr2-y"/></g>`,
		"fallback": "iconamoon:discount-thin",
	});
}

export default Component;
