import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wbygb0tnm.css';
import '../../css/l/ly0q5ab1k.css';
import '../../css/e/ecmm5nb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wbygb0tnm"/><path class="ly0q5ab1k"/><path class="ecmm5nb_w"/></g>`,
		"fallback": "streamline-freehand-color:crypto-close-up-group-chat-users-conversation",
	});
}

export default Component;
