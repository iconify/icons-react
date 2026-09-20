import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b6lpqb6ao.css';
import '../../css/v/vws5nt34t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="b6lpqb6ao"/><path class="vws5nt34t"/></g>`,
		"fallback": "streamline-sharp-color:empty-recycle-bin-1-flat",
	});
}

export default Component;
