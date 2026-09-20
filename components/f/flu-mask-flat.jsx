import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hspje7bkl.css';
import '../../css/n/nsqwv68ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hspje7bkl"/><path class="nsqwv68ki"/></g>`,
		"fallback": "streamline-sharp-color:flu-mask-flat",
	});
}

export default Component;
