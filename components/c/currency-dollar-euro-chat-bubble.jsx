import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/za-y-u5-e.css';
import '../../css/p/pruluhbfg.css';
import '../../css/q/qhu_wpbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="za-y-u5-e"/><path class="pruluhbfg"/><path class="qhu_wpbju"/></g>`,
		"fallback": "streamline-freehand-color:currency-dollar-euro-chat-bubble",
	});
}

export default Component;
