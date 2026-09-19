import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzwz2vbkt.css';
import '../../css/r/rf258g3jg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzwz2vbkt"/><path class="rf258g3jg"/>`,
		"fallback": "ep:discount",
	});
}

export default Component;
