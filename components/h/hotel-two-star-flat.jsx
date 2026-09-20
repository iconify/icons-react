import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kz91zcdnz.css';
import '../../css/f/fv5104bsi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kz91zcdnz"/><path class="fv5104bsi"/></g>`,
		"fallback": "streamline-color:hotel-two-star-flat",
	});
}

export default Component;
