import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wzby--bwi.css';
import '../../css/p/plvg2xbwb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wzby--bwi"/><path class="plvg2xbwb"/></g>`,
		"fallback": "streamline-color:cane-alt",
	});
}

export default Component;
