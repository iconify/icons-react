import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/urxim63_p.css';
import '../../css/o/ouif-o-0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="urxim63_p"/><path class="ouif-o-0u"/></g>`,
		"fallback": "streamline-sharp-color:cupcake-flat",
	});
}

export default Component;
