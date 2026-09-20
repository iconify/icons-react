import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h2ln_rw_w.css';
import '../../css/y/y3e26nbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h2ln_rw_w"/><path class="y3e26nbmn"/></g>`,
		"fallback": "streamline-sharp-color:glasses-flat",
	});
}

export default Component;
