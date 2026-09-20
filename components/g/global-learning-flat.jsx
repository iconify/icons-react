import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/do_u7wljd.css';
import '../../css/f/f50bkxkxz.css';
import '../../css/f/frprfzvzu.css';
import '../../css/l/lld3lbcdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="do_u7wljd"/><path class="f50bkxkxz"/><path class="frprfzvzu"/><path class="lld3lbcdl"/></g>`,
		"fallback": "streamline-sharp-color:global-learning-flat",
	});
}

export default Component;
