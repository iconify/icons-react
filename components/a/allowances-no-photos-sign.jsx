import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hliel1b1l.css';
import '../../css/p/p-b21_k3d.css';
import '../../css/a/au1i4acjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hliel1b1l"/><path class="p-b21_k3d"/><path class="au1i4acjz"/></g>`,
		"fallback": "streamline-freehand-color:allowances-no-photos-sign",
	});
}

export default Component;
