import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oklgaabrl.css';
import '../../css/h/h2_i2xbzw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oklgaabrl"/><path class="h2_i2xbzw"/></g>`,
		"fallback": "streamline-color:inbox-block-flat",
	});
}

export default Component;
