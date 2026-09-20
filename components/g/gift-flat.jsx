import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x0ut-cboh.css';
import '../../css/g/g4jhdabcz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x0ut-cboh"/><path clip-rule="evenodd" class="g4jhdabcz"/></g>`,
		"fallback": "streamline-color:gift-flat",
	});
}

export default Component;
