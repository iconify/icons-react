import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/af7b8co5r.css';
import '../../css/y/ykzxdyblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="af7b8co5r"/><path class="ykzxdyblb"/></g>`,
		"fallback": "hugeicons:file-check",
	});
}

export default Component;
