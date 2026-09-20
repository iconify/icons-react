import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bbxufcuqp.css';
import '../../css/o/o37kksbui.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bbxufcuqp"/><path class="o37kksbui"/></g>`,
		"fallback": "streamline-color:gender-equality-flat",
	});
}

export default Component;
