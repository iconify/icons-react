import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vn3ohy7yk.css';
import '../../css/v/vh5twnb_y.css';
import '../../css/d/ds11oubjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vn3ohy7yk"/><path class="vh5twnb_y"/><path class="ds11oubjp"/></g>`,
		"fallback": "streamline-freehand-color:circus-tent",
	});
}

export default Component;
