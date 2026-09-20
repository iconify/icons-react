import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kdqvh6bbb.css';
import '../../css/v/v7fyv2tmw.css';
import '../../css/e/ew1tkbrtr.css';
import '../../css/g/gn_t_acog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kdqvh6bbb"/><path class="v7fyv2tmw"/><path class="ew1tkbrtr"/><path class="gn_t_acog"/></g>`,
		"fallback": "streamline-freehand-color:file-code-share-1",
	});
}

export default Component;
