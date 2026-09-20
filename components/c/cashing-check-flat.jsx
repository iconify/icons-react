import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hmg8_n0aq.css';
import '../../css/p/pqzcrjbjz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hmg8_n0aq"/><path class="pqzcrjbjz"/></g>`,
		"fallback": "streamline-flex-color:cashing-check-flat",
	});
}

export default Component;
