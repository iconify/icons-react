import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fux8gjbzk.css';
import '../../css/r/rin1lacyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fux8gjbzk"/><path class="rin1lacyy"/></g>`,
		"fallback": "streamline-freehand-color:collaboration-team-chat",
	});
}

export default Component;
