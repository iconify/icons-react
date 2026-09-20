import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/itl6lmbir.css';
import '../../css/j/jpn3d4bji.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="itl6lmbir"/><path class="jpn3d4bji"/></g>`,
		"fallback": "streamline-color:arrow-roadmap-flat",
	});
}

export default Component;
