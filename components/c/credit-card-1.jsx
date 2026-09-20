import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rodx-bbgi.css';
import '../../css/u/usszxechu.css';
import '../../css/y/yxybwwqbg.css';
import '../../css/u/u6wus0bjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rodx-bbgi"/><path class="usszxechu"/><path class="yxybwwqbg"/><path class="u6wus0bjw"/></g>`,
		"fallback": "streamline-freehand-color:credit-card-1",
	});
}

export default Component;
