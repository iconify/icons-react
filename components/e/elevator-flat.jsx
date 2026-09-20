import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ul58c1b7s.css';
import '../../css/x/x8rpjwr4p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ul58c1b7s"/><path class="x8rpjwr4p"/></g>`,
		"fallback": "streamline-flex-color:elevator-flat",
	});
}

export default Component;
