import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h8ry1tbte.css';
import '../../css/b/b_as47b3j.css';
import '../../css/n/ndki_77_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h8ry1tbte"/><path class="b_as47b3j"/><path class="ndki_77_h"/></g>`,
		"fallback": "streamline-freehand-color:cloud-check",
	});
}

export default Component;
