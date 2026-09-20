import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z8z91qb5n.css';
import '../../css/k/k9z15puns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="z8z91qb5n"/><path class="k9z15puns"/></g>`,
		"fallback": "streamline-freehand-color:data-transfer-vertical",
	});
}

export default Component;
