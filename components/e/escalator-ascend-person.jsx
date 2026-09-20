import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o58aldlyn.css';
import '../../css/p/pai9iqpjo.css';
import '../../css/p/p7m0yt11w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o58aldlyn"/><path class="pai9iqpjo"/><path class="p7m0yt11w"/></g>`,
		"fallback": "streamline-freehand-color:escalator-ascend-person",
	});
}

export default Component;
