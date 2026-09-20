import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hzbau3qdg.css';
import '../../css/b/bxz5j56db.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hzbau3qdg"/><path class="bxz5j56db"/></g>`,
		"fallback": "streamline-freehand-color:face-id-male-1",
	});
}

export default Component;
