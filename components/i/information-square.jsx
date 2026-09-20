import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nl4j3gbuu.css';
import '../../css/f/fayk6ibbo.css';
import '../../css/z/z7h9dmbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="nl4j3gbuu"/><path class="fayk6ibbo"/><rect class="z7h9dmbpz"/></g>`,
		"fallback": "mage:information-square",
	});
}

export default Component;
