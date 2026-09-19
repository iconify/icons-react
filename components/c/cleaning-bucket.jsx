import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r74tqybkh.css';
import '../../css/w/w491debby.css';
import '../../css/b/b2z_ocb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r74tqybkh"/><path class="w491debby"/><path class="b2z_ocb9i"/></g>`,
		"fallback": "hugeicons:cleaning-bucket",
	});
}

export default Component;
