import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lhn8w7b1g.css';
import '../../css/c/c714ewuio.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="lhn8w7b1g"/><path class="c714ewuio"/></g>`,
		"fallback": "streamline-flex-color:dna-flat",
	});
}

export default Component;
