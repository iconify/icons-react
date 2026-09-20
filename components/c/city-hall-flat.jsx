import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ujco1sofn.css';
import '../../css/t/tnu8150qt.css';
import '../../css/h/hg6wvbcts.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ujco1sofn"/><path class="tnu8150qt"/><path class="hg6wvbcts"/></g>`,
		"fallback": "streamline-flex-color:city-hall-flat",
	});
}

export default Component;
