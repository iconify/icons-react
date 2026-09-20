import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zf0gm4int.css';
import '../../css/u/u17sczo3a.css';
import '../../css/z/z1idorbcj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zf0gm4int"/><path class="u17sczo3a"/><path class="z1idorbcj"/></g>`,
		"fallback": "streamline-color:fireworks-rocket-flat",
	});
}

export default Component;
