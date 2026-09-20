import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cgsr2cbuw.css';
import '../../css/w/w1tl90f_h.css';
import '../../css/z/zxwjn7b8j.css';
import '../../css/g/g1hkxrb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cgsr2cbuw"/><path class="w1tl90f_h"/><path class="zxwjn7b8j"/><path class="g1hkxrb8r"/></g>`,
		"fallback": "streamline-freehand-color:form-edition-clipboard-check",
	});
}

export default Component;
