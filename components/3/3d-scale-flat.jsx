import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ywe0_gbgq.css';
import '../../css/j/jr_rds80l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ywe0_gbgq"/><path class="jr_rds80l"/></g>`,
		"fallback": "streamline-sharp-color:3d-scale-flat",
	});
}

export default Component;
