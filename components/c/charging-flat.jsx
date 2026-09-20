import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yzk074bbz.css';
import '../../css/k/kh1tm_bla.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yzk074bbz"/><path class="kh1tm_bla"/></g>`,
		"fallback": "streamline-flex-color:charging-flat",
	});
}

export default Component;
