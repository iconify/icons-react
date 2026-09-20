import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kz91zcdnz.css';
import '../../css/p/pn71sk0bw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kz91zcdnz"/><path class="pn71sk0bw"/></g>`,
		"fallback": "streamline-color:hotel-one-star-flat",
	});
}

export default Component;
