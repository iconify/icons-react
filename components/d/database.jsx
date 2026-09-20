import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/to71q5bap.css';
import '../../css/k/kz-auxbsw.css';
import '../../css/d/d84f9nr-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="to71q5bap"/><path class="kz-auxbsw"/><path class="d84f9nr-o"/></g>`,
		"fallback": "streamline-freehand-color:database",
	});
}

export default Component;
