import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/etake0voz.css';
import '../../css/r/rind51b8t.css';
import '../../css/l/l3xver_wu.css';
import '../../css/l/l2zj1c4ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="etake0voz"/><path class="rind51b8t"/><path class="l3xver_wu"/><path class="l2zj1c4ns"/></g>`,
		"fallback": "streamline-freehand-color:business-deal-men-cash-conversation",
	});
}

export default Component;
