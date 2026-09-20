import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p29p1h7sl.css';
import '../../css/w/w7b4_ibai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p29p1h7sl"/><path class="w7b4_ibai"/></g>`,
		"fallback": "streamline-sharp-color:browser-error-flat",
	});
}

export default Component;
