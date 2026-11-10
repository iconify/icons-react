import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3wkhg66s.css';
import '../../css/s/ss4rb45jp.css';
import '../../css/r/r6t_flbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n3wkhg66s"/><path class="ss4rb45jp"/><path class="r6t_flbcn"/></g>`,
		"fallback": "andrsrxn:field-select",
	});
}

export default Component;
