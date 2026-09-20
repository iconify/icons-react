import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jgnuxbb8t.css';
import '../../css/e/ev9tcu8fj.css';
import '../../css/h/hmcj_4d4v.css';
import '../../css/t/tk3ctsbhh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jgnuxbb8t"/><path class="ev9tcu8fj"/><path class="hmcj_4d4v"/><path class="tk3ctsbhh"/></g>`,
		"fallback": "streamline-flex-color:color-swatches-flat",
	});
}

export default Component;
