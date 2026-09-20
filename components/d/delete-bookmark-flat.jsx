import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p1_ecsj0m.css';
import '../../css/y/yd7cilcwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p1_ecsj0m"/><path class="yd7cilcwb"/></g>`,
		"fallback": "streamline-sharp-color:delete-bookmark-flat",
	});
}

export default Component;
