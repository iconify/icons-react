import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/djdh_3b6t.css';
import '../../css/o/ocbknsu8a.css';
import '../../css/f/fuwf3cc6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="djdh_3b6t"/><path class="ocbknsu8a"/><path class="fuwf3cc6q"/></g>`,
		"fallback": "streamline-freehand-color:board-game-chess-figures",
	});
}

export default Component;
