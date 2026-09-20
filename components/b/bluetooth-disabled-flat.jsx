import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/abx8o45fk.css';
import '../../css/b/bn79sw9on.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="abx8o45fk"/><path class="bn79sw9on"/></g>`,
		"fallback": "streamline-color:bluetooth-disabled-flat",
	});
}

export default Component;
