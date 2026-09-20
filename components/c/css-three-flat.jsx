import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mfimpnckk.css';
import '../../css/h/h9e_z1btr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mfimpnckk"/><path class="h9e_z1btr"/></g>`,
		"fallback": "streamline-color:css-three-flat",
	});
}

export default Component;
