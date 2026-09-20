import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x9rs2ccet.css';
import '../../css/t/t6l11qe2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="x9rs2ccet"/><path class="t6l11qe2t"/></g>`,
		"fallback": "streamline-sharp-color:credit-card-disable-flat",
	});
}

export default Component;
