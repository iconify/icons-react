import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pe_fosdck.css';
import '../../css/b/bfomtzb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pe_fosdck"/><path class="bfomtzb3l"/></g>`,
		"fallback": "mage:image-check",
	});
}

export default Component;
