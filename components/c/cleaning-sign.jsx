import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n0i-vgb_k.css';
import '../../css/f/fjho7nbhe.css';
import '../../css/p/pdujj3blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n0i-vgb_k"/><path class="fjho7nbhe"/><path class="pdujj3blx"/></g>`,
		"fallback": "streamline-freehand-color:cleaning-sign",
	});
}

export default Component;
