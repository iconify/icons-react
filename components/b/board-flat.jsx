import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mbpy0ib_u.css';
import '../../css/b/b-dn-tb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mbpy0ib_u"/><path class="b-dn-tb4s"/></g>`,
		"fallback": "streamline-sharp-color:board-flat",
	});
}

export default Component;
