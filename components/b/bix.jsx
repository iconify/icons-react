import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ir4y4fk6l.css';
import '../../css/b/blxps4bai.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ir4y4fk6l"/><path class="blxps4bai"/></g>`,
		"fallback": "cryptocurrency-color:bix",
	});
}

export default Component;
