import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g2bgwnb5z.css';
import '../../css/w/wao2_2bgt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g2bgwnb5z"/><path class="wao2_2bgt"/></g>`,
		"fallback": "streamline-color:apple-flat",
	});
}

export default Component;
