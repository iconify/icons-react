import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dumq_cbyt.css';
import '../../css/w/w-zkw1x4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dumq_cbyt"/><path class="w-zkw1x4x"/></g>`,
		"fallback": "streamline-sharp-color:consellation-flat",
	});
}

export default Component;
