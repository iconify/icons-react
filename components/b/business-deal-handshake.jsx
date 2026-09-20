import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mj8qxfbqs.css';
import '../../css/c/ckdti6bwh.css';
import '../../css/h/h9xae-trb.css';
import '../../css/y/y1o6dws8x.css';
import '../../css/y/yerqcib8r.css';
import '../../css/s/szdxwnbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="mj8qxfbqs"/><path class="ckdti6bwh"/><path class="h9xae-trb"/><path class="y1o6dws8x"/><path class="yerqcib8r"/><path class="szdxwnbim"/></g>`,
		"fallback": "streamline-freehand-color:business-deal-handshake",
	});
}

export default Component;
