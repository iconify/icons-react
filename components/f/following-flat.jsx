import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qhi9aybht.css';
import '../../css/b/b2vh2k7_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qhi9aybht"/><path class="b2vh2k7_o"/></g>`,
		"fallback": "streamline-sharp-color:following-flat",
	});
}

export default Component;
