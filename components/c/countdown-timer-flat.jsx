import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a52u8ct4r.css';
import '../../css/i/i_ikmgbur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a52u8ct4r"/><path class="i_ikmgbur"/></g>`,
		"fallback": "streamline-flex-color:countdown-timer-flat",
	});
}

export default Component;
