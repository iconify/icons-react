import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/onoh73b6l.css';
import '../../css/v/v42xnhcko.css';
import '../../css/d/d59qf6ssp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="onoh73b6l"/><path class="v42xnhcko"/><path class="d59qf6ssp"/></g>`,
		"fallback": "streamline-color:global-learning-flat",
	});
}

export default Component;
