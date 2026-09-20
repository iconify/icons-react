import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qr-g92b4q.css';
import '../../css/y/yxk2t_bml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qr-g92b4q"/><path class="yxk2t_bml"/></g>`,
		"fallback": "streamline-sharp-color:apple-flat",
	});
}

export default Component;
