import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/inut2ibpg.css';
import '../../css/t/t6l11qe2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="inut2ibpg"/><path class="t6l11qe2t"/></g>`,
		"fallback": "streamline-sharp-color:hide-layer-flat",
	});
}

export default Component;
