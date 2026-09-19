import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ykzxdyblb.css';
import '../../css/x/xy7rjhljt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ykzxdyblb"/><path class="xy7rjhljt"/></g>`,
		"fallback": "hugeicons:file-up",
	});
}

export default Component;
