import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rl-fbwnpe.css';
import '../../css/q/qhz8-fyzm.css';
import '../../css/o/obibidbtv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rl-fbwnpe"/><path class="qhz8-fyzm"/><path class="obibidbtv"/></g>`,
		"fallback": "streamline-color:film-roll-1-flat",
	});
}

export default Component;
