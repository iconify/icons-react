import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xyklmgb3f.css';
import '../../css/b/b9j059bgl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xyklmgb3f"/><path class="b9j059bgl"/></g>`,
		"fallback": "streamline-flex-color:erlenmeyer-flask-flat",
	});
}

export default Component;
